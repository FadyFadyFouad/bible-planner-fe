import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- 1. Import FormsModule
import { Datepicker } from "../../components/datepicker/datepicker";

@Component({
  selector: 'app-planner',
  standalone: true,
  imports: [Datepicker, FormsModule], // <-- 2. Add it to your imports array
  templateUrl: './planner.html',
  styleUrl: './planner.scss',
})
export class Planner {
  selectedMode = 'single';
}
