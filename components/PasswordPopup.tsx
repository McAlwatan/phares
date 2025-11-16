import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface PasswordPopupProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
}

export default function PasswordPopup({ isOpen, onClose, projectName }: PasswordPopupProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulate password check delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Always show wrong password error
    setError("Incorrect password. Please try again.");
    setPassword("");
    setIsSubmitting(false);
  };

  const handleClose = () => {
    setPassword("");
    setError("");
    setIsSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-[#191919] border-[#3d3d3d] text-[#bfbfbf] max-w-md">
        <DialogHeader>
          <DialogTitle className="text-[#bfbfbf] font-mono text-xl">
            Access {projectName}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          <p className="text-[#7f7f7f] font-mono text-sm">
            This project is password protected. Please enter the password to view.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#202020] border-[#3d3d3d] text-[#bfbfbf] font-mono focus:border-[#008cff] placeholder:text-[#606060]"
                disabled={isSubmitting}
              />
              {error && (
                <p className="text-red-400 text-sm font-mono mt-2">{error}</p>
              )}
            </div>
            
            <div className="flex gap-3 justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="bg-transparent border-[#3d3d3d] text-[#bfbfbf] hover:bg-[#3d3d3d] font-mono cursor-pointer"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-[#008cff] hover:bg-[#0066cc] text-white font-mono cursor-pointer"
                disabled={isSubmitting || !password.trim()}
              >
                {isSubmitting ? "Checking..." : "Access"}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}