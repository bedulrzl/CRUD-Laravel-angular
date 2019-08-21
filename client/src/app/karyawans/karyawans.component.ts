import {Component, OnInit} from '@angular/core'

import {Karyawan} from './karyawan'
import {KaryawansService} from './karyawans.service'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-karyawans',
  templateUrl: './karyawans.component.html',
  providers: [KaryawansService]
})

export class KaryawansComponent implements OnInit {

  form = new FormGroup({
    dateYMD: new FormControl(new Date()),
  });

  karyawans: Karyawan[]
  editKaryawan: Karyawan


  constructor(private karyawanService: KaryawansService) {}

  ngOnInit(){
    this.getKaryawans()
  }

  getKaryawans():void {
    this.karyawanService.getKaryawans().subscribe(karyawans => (this.karyawans = karyawans))
  }

  add(name: string, dob: Date, gender: string, department: string): void {
    this.editKaryawan = undefined
    name = name.trim()
    dob = dob
    gender = gender.trim()
    department = department.trim()
    if(!name) {
      return
    }

    const newKaryawan: Karyawan = {name, dob, gender, department} as Karyawan
    this.karyawanService.addKaryawan(newKaryawan).subscribe(karyawan => this.karyawans.push(karyawan))
  }

  // newKaryawan(): void {
  //   this.submitted = false;
  //   this.cKaryawan = new Karyawan();
  // }

  // save() {
  //   this.karyawanService.addKaryawan(this.cKaryawan)
  //   .subscribe(data => console.log(data), error => console.log(error));
  //   this.cKaryawan = new Karyawan();
  // }

  // onSubmit() {
  //   this.submitted = true;
  //   this.save();
  // }

  delete(karyawan: Karyawan): void {
    this.karyawans = this.karyawans.filter(h => h !== karyawan)
    this.karyawanService.deleteKaryawan(karyawan.id).subscribe()
  }

  edit(karyawan) {
    this.editKaryawan = karyawan
  }

  update() {
    if(this.editKaryawan){
      this.karyawanService.updateKaryawan(this.editKaryawan).subscribe(karyawan => {
        const ix = karyawan ? this.karyawans.findIndex(h => h.id === karyawan.id) : -1
        if(ix > -1){
          this.karyawans[ix] = karyawan
        }
      })
      this.editKaryawan = undefined
    }
  }
}
