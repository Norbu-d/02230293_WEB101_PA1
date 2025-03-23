import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-center">Create a new account</CardTitle>
          <CardDescription className="text-center">It’s quick and easy.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4">
            <Input type="text" placeholder="First name" />
            <Input type="text" placeholder="Last name" />
          </div>
          <Input type="email" placeholder="Mobile number or email" />
          <Input type="password" placeholder="New password" />

          <div>
            <p className="text-sm font-medium mb-2">Birthday</p>
            <div className="flex space-x-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jan">January</SelectItem>
                  <SelectItem value="feb">February</SelectItem>
                  {/* Add more months */}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Day" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  {/* Add more days */}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  {/* Add more years */}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Gender</p>
            <RadioGroup defaultValue="female">
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <label htmlFor="female">Female</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="custom" id="custom" />
                  <label htmlFor="custom">Custom</label>
                </div>
              </div>
            </RadioGroup>
          </div>

          <p className="text-xs text-gray-600">
            By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="w-full">Sign Up</Button>
        </CardFooter>
        <p className="text-center text-sm mb-4">
          Already have an account?{' '}
          <a href="/" className="text-blue-500">
            Login
          </a>
        </p>
      </Card>
    </div>
  );
}