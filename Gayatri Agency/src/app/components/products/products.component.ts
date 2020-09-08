import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http: HttpClient, private modalService: NgbModal) { }
  closeResult: string;
  ngOnInit(): void {

  }

  onFileChanged(event) {
    // console.log("Event:", event.target.value);
    // this.selectedFile = <File>event.target.files[0];
    // const fd = new FormData();
    // fd.append('image', this.selectedFile, this.selectedFile.name);
    // this.http.post('http://bhagwats.online/', fd)
    //   .subscribe(res => {
    //     console.log(res);
    //   });
  }

  open(content, type, modalDimension) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
      this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        this.addProduct();
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else if (modalDimension == undefined && type === 'Login') {
      this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addProduct() {
    const headers = new HttpHeaders;
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS, PUT, DELETE');
    headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    headers.append('Content-Type', 'application/text');
    headers.append('Access-Control-Max-Age', '300000');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Authorization', 'Basic bTEyMjExQG1zLmNhbm9waS5hdHQuY29tOkNhbm9waU1TMjAxOQ==');
    headers.append('Cache-Control', 'public, max-age=31557600, s-maxage=31557600');
    headers.append('Cookie', 'restApiCookie=test');
    let data = {
      "num": "154",
      "prods": "FFFFF"
    }
    this.http.post<any>('https://bhagwats.online/insert.php', data, { headers }).subscribe(data1 => {
      console.log(data1);
    }, error => console.error(error));
  }
}
