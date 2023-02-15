
function render(container) {
    const containerEl = document.querySelector(container);
    const content = `
        <div id="gocardless-legal-notice" style="max-width: 564px">
            <p style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 400px; line-height: 22px; color: #000;">
                By continuing, you agree to our partner, GoCardless, to trigger recurring payments from 
                your bank account based on the payment parameters you have agreed with us. You also 
                agree to GoCardless' Payer Terms of Use and Privacy Notice.
            </p>
        </div>
        <div id="gocardless-powered-by" style="display: flex; align-items: center;margin-top: 16px;">
            <span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 400px; line-height: 22px; color: #000; margin-right: 4px;">
                Powered by 
            </span>
            <svg width="108" height="16" viewBox="0 0 108 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.04892 7.36114H12.0025C12.0961 7.82987 12.2041 8.67902 12.2041 9.71838C12.2041 12.5647 9.86412 15.4519 6.37212 15.4519C2.88012 15.4519 -0.0214802 12.6531 0.000119822 8.76733C0.0217198 4.68462 3.29052 2.04885 7.61052 2.04885C8.08572 2.04885 8.62572 2.08961 9.00732 2.13037L10.4689 6.5052L9.86412 6.69541L8.30892 5.35714C6.95532 4.20909 6.03372 3.82867 5.11212 3.82867C3.85212 3.82867 2.83692 4.6982 2.83692 6.42368C2.83692 9.65045 5.29212 12.9859 7.99212 12.9859C9.27372 12.9859 9.90732 12.5376 10.3537 12.096L7.04172 7.99291V7.35435L7.04892 7.36114ZM25.0777 9.95615C25.0777 13.0606 22.5577 15.4994 19.0873 15.4994C15.6169 15.4994 13.0969 13.0539 13.0969 9.95615C13.0969 6.85844 15.6169 4.41289 19.0873 4.41289C22.5577 4.41289 25.0777 6.85844 25.0777 9.95615ZM21.0457 9.35834C20.1673 6.85165 19.0225 5.34356 17.6473 5.76474C16.2721 6.19271 16.2721 8.04046 17.1289 10.5472C18.0073 13.0539 19.1521 14.5619 20.5273 14.1408C21.9025 13.7128 21.9025 11.865 21.0457 9.35834ZM36.6193 10.6558L36.8929 11.505C36.5329 13.3935 35.0209 15.4586 32.0041 15.4586C28.6057 15.4586 25.9489 12.7617 25.9489 8.86923C25.9489 4.68462 29.2177 2.04885 33.2425 2.04885C33.8257 2.04885 34.3441 2.08961 34.6393 2.13037L36.1009 6.5052L35.4961 6.69541L33.9409 5.35714C32.6089 4.22947 31.8025 3.80829 30.8809 3.80829C29.6209 3.80829 28.7857 4.6982 28.7857 6.42368C28.7857 9.65045 30.6793 12.5647 33.4441 12.5647C35.1577 12.5647 36.0793 11.6748 36.6193 10.6558ZM49.7449 13.543L49.9681 14.2223C49.7881 14.5212 48.9961 15.4315 47.6065 15.4315C45.7345 15.4315 44.9713 14.3921 44.4313 12.9859C43.9129 14.3038 42.7177 15.4519 40.5577 15.4519C38.6209 15.4519 37.5625 14.2427 37.5625 12.9248C37.5625 11.0974 39.1609 9.7999 42.5809 8.12198C42.1561 7.35435 41.1841 6.99431 40.1473 6.99431C38.8873 6.97393 37.4905 7.48342 36.7705 8.39371L36.5257 7.67363C37.0657 6.29461 38.8657 4.46723 41.7529 4.46723C44.3449 4.46723 46.1017 5.95495 46.9081 8.31219L48.4633 12.8161C48.6865 13.4954 49.0465 13.6856 49.3417 13.6856C49.5001 13.6856 49.6585 13.6245 49.7449 13.5362V13.543ZM43.3729 10.2075L42.8977 8.86923C41.6161 9.77952 40.9825 10.948 40.9825 11.8039C40.9825 12.9112 41.5657 13.4207 42.3793 13.4207C43.7761 13.4207 44.0713 12.1911 43.3729 10.2143V10.2075ZM59.1553 7.74156L58.5721 7.93177C57.3553 7.4019 56.9089 7.36114 55.8937 7.36114C55.2889 7.36114 54.6985 7.61928 54.6985 7.61928V13.3528C54.6985 13.9506 55.0153 14.3921 55.8505 14.6299V15.2684H50.1985V14.6299C50.9401 14.3989 51.0121 13.9506 51.0121 13.3528V7.23207C51.0121 6.12478 50.6737 5.74436 49.4785 5.27563V4.63706H54.6553L54.5617 6.95355H54.6049L55.0297 6.42368C55.8865 5.36394 56.9665 4.5963 58.0249 4.5963H58.1185L59.1553 7.74156ZM70.6177 14.6231V15.2616H65.9809L66.0025 13.8826H65.8873C65.5273 14.3921 64.5841 15.35 62.8921 15.35C60.3217 15.35 58.7233 13.312 58.7233 10.6762C58.7233 7.21169 61.2001 4.705 65.2537 4.705C65.5705 4.705 65.8873 4.72538 65.8873 4.72538V3.85585C65.8873 2.91838 65.3905 2.5991 64.5841 2.53796V1.96733L69.3793 0.5H69.5809V13.3528C69.5809 13.9506 69.8761 14.3921 70.6177 14.6299V14.6231ZM65.8873 11.7767V6.21309C65.7289 6.15195 65.4625 6.06364 65.0521 6.06364C63.7201 6.06364 62.0785 7.02148 62.0785 9.698C62.0785 12.1843 63.0937 13.543 64.4689 13.543C64.9873 13.543 65.8873 13.312 65.8873 11.7767ZM77.1913 14.6231V15.2616H71.4241V14.6231C72.1657 14.3921 72.4609 13.9438 72.4609 13.346V3.85585C72.4609 2.91838 71.9641 2.5991 71.1577 2.53796V1.96733L75.9529 0.5H76.1545V13.3528C76.1545 13.9506 76.4497 14.3921 77.1913 14.6299V14.6231ZM88.9489 10.2279L89.1937 10.948C88.8121 13.4343 86.6737 15.4519 83.8801 15.4519C80.3017 15.4519 78.0049 12.9248 78.0049 9.73876C78.0049 6.83127 80.1649 4.49441 83.2033 4.49441C85.4065 4.49441 87.0553 5.77153 87.7321 7.49021L81.8353 11.2536C82.6705 12.0824 83.8369 12.6531 85.1905 12.6531C87.0337 12.6531 88.4305 11.4439 88.9489 10.2279ZM80.3233 7.82987C80.3233 8.76733 80.6617 9.73876 81.2449 10.5675L82.2385 9.67762C82.9153 9.07982 83.4769 8.42088 83.4769 7.51059C83.4769 6.81089 82.9801 5.98212 81.9937 5.98212C81.0721 5.98212 80.3305 6.64106 80.3305 7.82987H80.3233ZM95.4793 8.52957C97.6609 9.56893 98.5393 10.5879 98.5393 12.0145C98.5393 13.7332 97.0777 15.4586 93.9457 15.4586C92.2825 15.4586 91.3105 15.2005 90.4969 14.888L89.4385 11.7835L90.0217 11.6137L90.5401 12.0824C92.1385 13.509 93.5137 14.4397 94.5721 14.4397C95.3569 14.4397 95.7889 13.9709 95.7889 13.4818C95.7889 12.9927 95.7025 12.4628 94.3489 11.8243L92.3473 10.8664C90.5905 10.0173 89.7553 8.97792 89.7553 7.78911C89.7553 5.75115 91.6489 4.56234 94.0753 4.56234C95.7169 4.56234 96.6457 4.77293 96.6457 4.77293L97.5673 7.46983L96.9841 7.63966L96.6241 7.34076C94.7521 5.79191 94.1041 5.47263 93.3121 5.47263C92.7505 5.47263 92.2753 5.81229 92.2753 6.28102C92.2753 6.62068 92.3401 7.04865 93.4705 7.57852L95.4721 8.53637L95.4793 8.52957ZM104.94 8.54995C107.1 9.60969 108 10.5879 108 12.0145C108 13.7332 106.539 15.4586 103.407 15.4586C101.743 15.4586 100.771 15.2005 99.9577 14.888L98.8993 11.7835L99.4825 11.6137L100.001 12.0824C101.599 13.509 102.975 14.4397 104.033 14.4397C104.818 14.4397 105.25 13.9709 105.25 13.4818C105.25 12.9927 105.156 12.4832 103.81 11.8243L101.808 10.8461C100.051 9.99691 99.2161 8.97792 99.2161 7.78911C99.2161 5.75115 101.11 4.56234 103.536 4.56234C105.178 4.56234 106.107 4.77293 106.107 4.77293L107.028 7.46983L106.445 7.63966L106.085 7.34076C104.213 5.79191 103.565 5.47263 102.773 5.47263C102.211 5.47263 101.736 5.81229 101.736 6.28102C101.736 6.62068 101.801 7.02148 102.931 7.57852L104.933 8.55675L104.94 8.54995Z" fill="black"/>
            </svg>
        </div>`
    const contentEl = document.createElement("div");
    contentEl.id = "gocardless-cpp-compliance";
    contentEl.innerHTML = content;
    
    containerEl.insertBefore(contentEl, null);
    
    async function log() {
        const logRecord = new Parse.Object("logs");
        logRecord.set("type", "script");
        logRecord.set("source", "App");
        try {
            let result = await logRecord.save()
            alert('New object created with objectId: ' + result.id);
        } catch(error) {
            alert('Failed to create new object, with error code: ' + error.message);
        }
    }
    
    function loadParseScript() {
        return new Promise(function (resolve, reject) {
            const parseScript = document.createElement('script');  
            parseScript.setAttribute('src','https://npmcdn.com/parse/dist/parse.min.js');
            parseScript.onload = resolve;
            parseScript.onerror = reject;
            document.head.appendChild(parseScript);
        });
    }
    
    loadParseScript()
        .catch(() => console.error("Something went wrong"))
        .then(() => {
            Parse.initialize("5ToyUqtnmb507Nq92yVG997ecJLC4ZM3awSb9jRG","WdsZjGD5xBZk6TeHpS6XLNHgiiuAAyM1TBmEwonG");
            Parse.serverURL = 'https://parseapi.back4app.com/'
            log()
        });    
}

document.gocardlessCompliance = {
    render,
}