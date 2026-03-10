import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<"patient" | "doctor" | "">("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !email ||
      !fullName ||
      !password ||
      !confirmPassword ||
      !role ||
      !agreedToTerms
    ) {
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setIsLoading(true);

    // Simulate registration API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to email verification or login
      navigate("/auth/verify-otp", { state: { email } });
    }, 1500);
  };

  return (
    <div className="w-full">
      <Card>
        <div className="mt-8 mb-4 flex justify-center">
          <img src={logo} alt="Health & Wellness Logo" className="h-24 w-24" />
        </div>
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>
            Join us to access personalized health and wellness services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            {/* Role Selection */}
            <div className="space-y-2">
              <Label>I am a</Label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setRole("patient")}
                  disabled={isLoading}
                  className={`flex-1 py-2 px-4 rounded-lg border-2 transition font-medium ${
                    role === "patient"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                  }`}
                >
                  Patient
                </button>
                <button
                  type="button"
                  onClick={() => setRole("doctor")}
                  disabled={isLoading}
                  className={`flex-1 py-2 px-4 rounded-lg border-2 transition font-medium ${
                    role === "doctor"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                  }`}
                >
                  Doctor
                </button>
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                >
                  {showPassword ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Minimum 8 characters with uppercase, lowercase, number and special character
              </p>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-2 pt-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                disabled={isLoading}
                className="mt-1"
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground">
                I agree to the{" "}
                <Link to="#" className="text-blue-600 hover:underline">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link to="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              disabled={
                isLoading ||
                !email ||
                !fullName ||
                !password ||
                !confirmPassword ||
                !role ||
                !agreedToTerms
              }
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>

            {/* Login Link */}
            <div className="text-center pt-4 border-t">
              <span className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  to="/auth/login"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Sign in
                </Link>
              </span>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
