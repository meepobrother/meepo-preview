import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SysinfoService } from './sysinfo.service';
declare const require;
const Base64 = require('js-base64').Base64;
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ApiService {
    static that: any;

    header: HttpHeaders = new HttpHeaders();
    onInit: Subject<any> = new Subject();


    sysinfo: SysinfoService;
    constructor(
        public http: HttpClient,
    ) {
        this.sysinfo = SysinfoService.getSysinfo();
        this.header.append('Content-Type', 'application/x-www-form-urlencoded');
    }

    setSiteroot(siteroot: string) {
        this.sysinfo.siteroot = siteroot;
    }


    mget<T>(__do: string = 'index', __module: string = 'imeepos_runner'): Observable<T> {
        const url = this.murl('entry//open', { m: 'imeepos_runner', __do: __do });
        return this.http.get<T>(url, { headers: this.header });
    }

    murl(segment: string, params: any = {}, isCloud: boolean = false) {
        const segments = segment.split('/');
        const __controller = segments[0];
        const __action = segments[1];
        const __do = segments[2];
        let str: any = '';
        for (let key in params) {
            str += "&" + key + "=" + params[key];
        }
        if (isCloud) {
            return `https://meepo.com.cn/app/index.php?c=${__controller}&do=${__do}&a=${__action}&i=${this.sysinfo.getUniacid()}&j=${this.sysinfo.getAcid()}${str}`;
        } else {
            return `${this.sysinfo.siteroot}app/index.php?c=${__controller}&do=${__do}&a=${__action}&i=${this.sysinfo.getUniacid()}&j=${this.sysinfo.getAcid()}${str}`;
        }
    }

    wurl(segment: string, params: any = {}) {
        const segments = segment.split('/');
        const __controller = segments[0];
        const __action = segments[1];
        const __do = segments[2];
        let str = '';
        for (let key in params) {
            str += "&" + key + "=" + params[key];
        }
        return `${this.sysinfo.siteroot}web/index.php?c=${__controller}&do=${__do}&a=${__action}&i=${this.sysinfo.getUniacid()}&j=${this.sysinfo.getAcid()}${str}`;
    }

    doMobileUrl(__do: string, __module: string) {
        return this.murl('entry//' + __do, { m: __module });
    }

    doWebUrl(__do: string, __module: string) {
        return this.wurl('site/entry/' + __do, { m: __module });
    }

    mpost<T>(__do: string = 'index', __body: any = {}, __module: string = 'imeepos_runner', isCloud: boolean = false): Observable<T> {
        let url = this.murl('entry//open', { m: 'imeepos_runner', __do: __do }, isCloud);
        const d = JSON.stringify(__body);
        const encrypted = Base64.encode(d);
        return this.http.post<T>(url, { encrypted: encrypted }, { headers: this.header });
    }

    entry(__body: any = {}) {
        const d = JSON.stringify(__body);
        const encrypted = Base64.encode(d);
        return { encrypted: encrypted };
    }

    wget<T>(__do: string = 'index', __module: string = 'imeepos_runner'): Observable<T> {
        const params =
            new HttpParams()
                .set('c', 'site')
                .set('a', 'entry')
                .set('do', 'open')
                .set('i', this.sysinfo.getUniacid() || '2')
                .set('j', this.sysinfo.getAcid() || '2')
                .set('__do', __do)
                .set('m', __module);
        return this.http.get<T>('web', { params: params });
    }



    wpost<T>(__do: string = 'index', __body: any = {}, __module: string = 'imeepos_runner'): Observable<T> {
        let url = this.doWebUrl(__do, __module);
        const d = JSON.stringify(__body);
        const encrypted = Base64.encode(d);
        return this.http.post<T>(url, { encrypted: encrypted });
    }

    isSqlError(val: string) {
        console.log(val);
        if (typeof val === 'string') {
            val = val.toLowerCase().trim();
            return val.indexOf('sql:') >= 0;
        } else {
            return false;
        }
    }
}

