import { Button } from "@/components/ui/Button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/Select";

export default function FormBar() {
    return (
        <div className="flex items-center justify-between space-x-2">
              <div className="flex items-center space-x-2">
                <span className="text-gray-500 dark:text-gray-400">Expires:</span>
                <Select value={expiresValue} onValueChange={(value) => setExpiresValue(value)}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Select expiration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1 hour">1 hour</SelectItem>
                    <SelectItem value="1 day">1 day</SelectItem>
                    <SelectItem value="1 week">1 week</SelectItem>
                    <SelectItem value="1 month">1 month</SelectItem>
                    <SelectItem value="1 year">1 year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-auto font-bold">
                Create Paste
              </Button>
            </div>
    )
}