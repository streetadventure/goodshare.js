/**
 *  Vikky Shostak <vikkyshostak@gmail.com>
 *  Copyright (c) 2017 Koddr https://koddr.me
 *  http://opensource.org/licenses/MIT The MIT License (MIT)
 *
 *  goodshare.js
 *
 *  Weibo (http://weibo.com) provider.
 */

class Weibo {
    constructor(url = document.location.href, title = document.title) {
        this.url = encodeURIComponent(url);
        this.title = encodeURIComponent(title);
    }
    
    shareWindow() {
        const share_elements = document.querySelectorAll('[data-social=weibo]');
        
        [...share_elements].forEach((item) => {
            const url = item.dataset.url ? encodeURIComponent(item.dataset.url) : this.url;
            const title = item.dataset.title ? encodeURIComponent(item.dataset.title) : this.title;
            const share_url = 'http://service.weibo.com/share/share.php?url=' + url + '&title=' + title;
            
            item.addEventListener('click', function (event) {
                event.preventDefault();
                return window.open(share_url, 'Share this', 'width=640,height=480,location=no,toolbar=no,menubar=no');
            });
        });
    }
}

export const weibo_share = new Weibo().shareWindow();