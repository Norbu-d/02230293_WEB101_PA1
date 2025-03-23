import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here (e.g., validate credentials)
    // For now, just navigate to the Home Page
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-center">Log Into Facebook</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input type="email" placeholder="Email address" />
          <Input type="password" placeholder="Password" />
          <Button onClick={handleLogin} className="w-full">
            Log In
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-4">
          <a href="/forgot-password" className="text-sm text-blue-500">
            Forgot account?
          </a>
          <div className="w-full border-t border-gray-200 my-4" />
          <Button variant="outline" className="w-full" onClick={() => navigate('/signup')}>
            Create new account
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}