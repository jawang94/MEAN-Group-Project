import { Component } from "@angular/core";
import { ChatService } from "./services/chat.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  message: string;
  messages: string[] = [];
  users: any[] = [];

  constructor(private chatService: ChatService) {}

  public sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = "";
  }

  ngOnInit() {
    this.chatService.getMessages().subscribe((message: string) => {
      console.log(message);
      this.messages.push(message);
    });
  }
}