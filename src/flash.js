const flashInstaller = root => {
    const flash_scrollToTop = (ms, itcount=0) => {
        if(typeof ms != "number")
            throw new root.TypeError("The first parameter must be an integer (in ms).");

        const tps = (ms < 100 || ms > 1200) ? 500 : ms;

        const dist = root.scrollY;

        if(dist > 0 && itcount < 150){
            root.scrollBy(0, -(dist+10)/10);
            itcount+=1;
            setTimeout(() => flash_scrollToTop(tps, itcount), tps/10.1);
        }
    };

    const unfoldFlashMessage = (fm, context=root.document.body) => {
        fm.classList.remove("flash-folded");
        flash_scrollToTop(150);
        fm.onclick = ()=>{
            fm.classList.add("flash-folded");
            setTimeout(
                () => context.removeChild(fm),
                2000//a 2s timeout before removing node, to let transitions be
            );
        };
    }

    const unfoldFlashMessages = () => {
        const toArray = arraylike => [].slice.call(arraylike);

        const foldedFlashes = toArray(root.document.querySelectorAll(".flash-folded"));

        foldedFlashes.forEach(fm => unfoldFlashMessage(fm, fm.parentElement));
    }

    const flash = (type, msg, context=root.document.body) => {
        if(typeof msg != "string")
            throw new root.TypeError("The message must be a string.");
        if(typeof type != "string")
            throw new root.TypeError("The type of the flash message must be a string");

        const FM = root.document.createElement("DIV");
        const P = root.document.createElement("P");
        const BTN = root.document.createElement("BUTTON");

        FM.classList.add("flash");
        P.appendChild(root.document.createTextNode(msg));
        BTN.classList.add("flash-close");
        BTN.innerHTML = "&#x2716;";//A nice ready to go X

        FM.appendChild(BTN);
        FM.appendChild(P);
        FM.classList.add("flash-folded");

        if(type !== "")
            FM.classList.add(`flash-${type}`);
        
        if(context != root.document.body)
            FM.classList.add("flash-embed");

        context.prepend(FM);

        root.setTimeout(() => unfoldFlashMessage(FM, context), 250);
    }

    root.document.addEventListener("DOMContentLoaded", unfoldFlashMessages);

    ["success", "failure", "info"]
    .forEach(type => flash[type] = flash.bind(flash, type));

    flash.default = flash.bind(flash, "");
    
    root.flash = flash;    
    return flash;
};

const flash = flashInstaller(window);

export { flash, flashInstaller }