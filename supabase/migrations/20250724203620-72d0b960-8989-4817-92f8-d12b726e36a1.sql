-- Create security definer function to get current user role
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS TEXT AS $$
  SELECT role FROM public.profiles WHERE id = auth.uid();
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

-- Drop and recreate admin policies using the security definer function
DROP POLICY IF EXISTS "Admins can manage menu items" ON public.menu_items;
DROP POLICY IF EXISTS "Admins can view all orders" ON public.orders;
DROP POLICY IF EXISTS "Admins can update all orders" ON public.orders;
DROP POLICY IF EXISTS "Admins can view all order items" ON public.order_items;

-- Recreate admin policies with security definer function
CREATE POLICY "Admins can manage menu items" ON public.menu_items
  FOR ALL USING (public.get_current_user_role() = 'admin');

CREATE POLICY "Admins can view all orders" ON public.orders
  FOR SELECT USING (public.get_current_user_role() = 'admin');

CREATE POLICY "Admins can update all orders" ON public.orders
  FOR UPDATE USING (public.get_current_user_role() = 'admin');

CREATE POLICY "Admins can view all order items" ON public.order_items
  FOR SELECT USING (public.get_current_user_role() = 'admin');