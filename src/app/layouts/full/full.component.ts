import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
    selector: 'full-layout',
    templateUrl: './full.component.html',
    styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {

    constructor(public router: Router) {}

    public innerWidth: any;
    public defaultSidebar: any;
    public showMobileMenu:boolean = false;
    public expandLogo:boolean = false;
    public sidebartype:string = 'full';
    
    Logo() {
        this.expandLogo = !this.expandLogo;
    }

    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/starter']);
        }
        this.defaultSidebar =  this.sidebartype;
        this.handleSidebar();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.handleSidebar();
    }

    handleSidebar() {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth < 1170) {
            this.sidebartype = 'mini-sidebar';
        } else {
            this.sidebartype = this.defaultSidebar;
        }            
    }

    toggleSidebarType() {
        switch (this.sidebartype) {
            case "full":
                this.sidebartype = 'mini-sidebar';
                break;

            case "mini-sidebar":
                this.sidebartype = 'full';                
                break;
        
            default:
        }
    }
}