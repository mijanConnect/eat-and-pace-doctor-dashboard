"use client";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Paperclip } from "lucide-react";

export default function Attachments() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold">Attachments</h2>

      <div className="mt-4 flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDE */}
        <div className="w-full space-y-2">
          <Label>Notes</Label>
          <Textarea
            placeholder="Write additional information here..."
            className="min-h-50 rounded-xl"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full">
          <Label>Attach Documents</Label>

          <div className="flex flex-col lg:flex-row gap-4">
            {/* File Box 1 */}
            <label className="flex flex-col bg-[#F7F9FC] items-center justify-center w-full h-50 border rounded-xl cursor-pointer hover:bg-muted transition">
              <Paperclip className="w-6 h-6 mb-2 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Add Documents
              </span>
              <input type="file" className="hidden" />
            </label>

            {/* File Box 2 */}
            <label className="flex flex-col items-center bg-[#F7F9FC] justify-center w-full h-50 border rounded-xl cursor-pointer hover:bg-muted transition">
              <Paperclip className="w-6 h-6 mb-2 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Add Documents
              </span>
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
