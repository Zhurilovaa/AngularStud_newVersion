import { Component } from "@angular/core";

@Component({
    selector: "not-found-app",
    template: `<h3>Страница не найдена</h3>
    <div class="er"><button class="btn" routerLink="">Хочу вернуться домой<span> !</span></button></div>`,
    styleUrls: ["./app.component.less"],
})
export class NotFoundComponent { }
