import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AllowIn, KeyboardShortcutsComponent, ShortcutEventOutput, ShortcutInput } from 'ng-keyboard-shortcuts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
    shortcuts: ShortcutInput[] = [];
    // @ViewChild('input') input: ElementRef | any;
    // @ViewChild(KeyboardShortcutsComponent) private keyboard: KeyboardShortcutsComponent | any;
    title: string = 'hello'

    ngAfterViewInit(): void {
        this.shortcuts.push(
            {
                key: "cmd + t",
                preventDefault: true,
                allowIn: [AllowIn.Textarea, AllowIn.Input],
                command: e => console.log("clicked " , e.key)
            },
           {
                key: ["? a"],
                label: "Sequences",
                description: "Sequence ? and a",
                command: (output: ShortcutEventOutput) => console.log("? a", output),
                preventDefault: true
            },
            {
                key: ["up up down down left right left right b a enter"],
                label: "Sequences",
                description: "Konami code!",
                command: (output: ShortcutEventOutput) => console.log("Konami code!!!", output),
            },
            {
                key: "cmd + shift + f",
                command: (output: ShortcutEventOutput) => console.log(output),
                preventDefault: true,
                throttleTime: 250,
                // target: this.input.nativeElement
            },
            {
                key: ["cmd + =", "cmd + z"],
                command: (output: ShortcutEventOutput) => console.log(output),
                preventDefault: true
            },
            {
                key: "cmd + f",
                label: "cmd f",
                command: () => confirm('you click cmd + f'),
                preventDefault: true
            },
            {
              key: "cmd + e",
              label: "test",
              description: "hello world",
              command: () => confirm('directive cmd + e'),
              // command: () => this._router.navigate([‘/my_url', ‘page'])
              preventDefault: true
            }
        );

        // this.keyboard.select("cmd + f").subscribe((e: any) => console.log(e));
      }

}
