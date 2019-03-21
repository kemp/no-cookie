module.exports = {
    render: function() {
        let cookieDiv = document.createElement('div');
        let styleEl = document.createElement('style');
        let cookieLabel = document.createElement('input');

        cookieDiv.id = 'no-cookie';
        cookieDiv.innerHTML = `
            <span><strong>Notice:</strong> This site makes no use of cookies. By continued use of our website, you conset to the neglect of cookies. <label class="accept" for="no-cookie-close">Accept and Continue</label></span>
            <label for="no-cookie-close" aria-label="Close No-Cookie Consent Banner" style="cursor: pointer; float: right;">&times;</span>
        `;

        styleEl.innerHTML = `
            #no-cookie {
                background: #fdfdfd;
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                margin: 0;
                padding: 1rem;
                box-shadow: #222 0 0 2px;
            }
            #no-cookie-close:checked ~ #no-cookie {
                display: none;
            }
            #no-cookie .accept {
                border: 1px solid #222;
                display: inline-block;
                padding: 3px;
                cursor: pointer;
                color: white;
                background: #222;
            }
        `;

        cookieLabel.style = 'display: none;';
        cookieLabel.type = 'checkbox';
        cookieLabel.id = 'no-cookie-close';

        document.head.appendChild(styleEl);

        document.body.appendChild(cookieDiv);
        document.body.insertBefore(cookieLabel, cookieDiv);
    }
};
