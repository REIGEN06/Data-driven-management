export interface Message {
  sender: "user" | "bot";
  text?: string;
  status: "awaited" | "error" | "success";
  toxicLevel?: number;
}
