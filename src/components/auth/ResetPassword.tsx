import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, CheckCircle, X } from "lucide-react";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });

  const validatePassword = (pwd: string) => {
    setPasswordStrength({
      length: pwd.length >= 8,
      uppercase: /[A-Z]/.test(pwd),
      lowercase: /[a-z]/.test(pwd),
      number: /[0-9]/.test(pwd),
      special: /[!@#$%^&*]/.test(pwd),
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const isPasswordValid = Object.values(passwordStrength).every(Boolean);
  const passwordsMatch = password === confirmPassword && password.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPasswordValid || !passwordsMatch) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/auth/login");
    }, 1500);
  };

  const PasswordRequirement = ({
    met,
    text,
  }: {
    met: boolean;
    text: string;
  }) => (
    <div
      className={`flex items-center gap-2 text-sm ${met ? "text-green-600" : "text-gray-500"}`}
    >
      {met ? <CheckCircle className="size-4" /> : <X className="size-4" />}
      {text}
    </div>
  );

  return (
    <div className="w-full">
      {/* <Link
        to="/auth/forgot-password"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
      >
        <ArrowLeft className="size-4" />
        Back to reset password
      </Link> */}
      <Card>
        <CardHeader>
          <CardTitle>Create New Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* New Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="block">
                New Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your new password"
                  value={password}
                  onChange={handlePasswordChange}
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
            </div>

            {/* Password Requirements */}
            {password && (
              <div className="space-y-2 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-900 mb-3">
                  Password must contain:
                </p>
                <PasswordRequirement
                  met={passwordStrength.length}
                  text="At least 8 characters"
                />
                <PasswordRequirement
                  met={passwordStrength.uppercase}
                  text="One uppercase letter (A-Z)"
                />
                <PasswordRequirement
                  met={passwordStrength.lowercase}
                  text="One lowercase letter (a-z)"
                />
                <PasswordRequirement
                  met={passwordStrength.number}
                  text="One number (0-9)"
                />
                <PasswordRequirement
                  met={passwordStrength.special}
                  text="One special character (!@#$%^&*)"
                />
              </div>
            )}

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="block">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </button>
              </div>
              {password && confirmPassword && !passwordsMatch && (
                <p className="text-xs text-red-600">Passwords do not match</p>
              )}
              {passwordsMatch && (
                <p className="text-xs text-green-600">Passwords match</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || !isPasswordValid || !passwordsMatch}
            >
              {isLoading ? "Resetting Password..." : "Reset Password"}
            </Button>

            {/* Info Message */}
            <div className="text-xs text-muted-foreground text-center p-3 bg-blue-50 rounded-lg">
              Your password will be updated and you'll be redirected to login
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
