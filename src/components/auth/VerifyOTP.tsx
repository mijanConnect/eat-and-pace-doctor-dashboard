import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const email =
    (location.state as { email?: string })?.email || "example@email.com";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [resendTime, setResendTime] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (resendTime > 0) {
      const timer = setTimeout(() => setResendTime(resendTime - 1), 1000);
      return () => clearTimeout(timer);
    } else if (resendTime === 0) {
      setCanResend(true);
    }
  }, [resendTime]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }
    if (!/^[0-9]*$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join("");
    if (otpString.length !== 6) {
      return;
    }

    setIsLoading(true);
    // Simulate OTP verification API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/auth/reset-password");
    }, 1500);
  };

  const handleResendOtp = () => {
    if (canResend) {
      setOtp(["", "", "", "", "", ""]);
      setResendTime(60);
      setCanResend(false);
      inputRefs.current[0]?.focus();
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

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
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Mail className="size-6 text-blue-600" />
          </div>
          <CardTitle>Verify Your Email</CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            We've sent a 6-digit code to <br />
            <span className="font-medium text-foreground">{email}</span>
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* OTP Input Fields */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-900 text-center">
                Enter Verification Code
              </p>
              <div className="flex justify-center gap-2 sm:gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    maxLength={1}
                    disabled={isLoading}
                    className="w-10 h-12 sm:w-12 sm:h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition"
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground text-center">
                {isOtpComplete
                  ? "Code is complete. Click verify to continue."
                  : "Enter the 6-digit code from your email"}
              </p>
            </div>

            {/* Verify Button */}
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || !isOtpComplete}
            >
              {isLoading ? "Verifying..." : "Verify Code"}
            </Button>

            {/* Resend Section */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Didn't receive the code?
              </p>
              {canResend ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleResendOtp}
                  className="w-full"
                >
                  Resend Code
                </Button>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Resend code in{" "}
                  <span className="font-bold text-blue-600">{resendTime}s</span>
                </p>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
