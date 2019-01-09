import "./flash.scss"

(function UniversalModuleDefinition(root, factory){
	if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(root);
    else{
		const module_name = "flash";
		if(typeof define === 'function' && define.amd)
			define(module_name, [], factory.bind(null, root));
		else
			if(typeof exports === 'object')
				exports[module_name] = factory(root);
			else
				root[module_name] = factory(root);
	}
})(window, root => {
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

    const unfoldFlashMessage = fm => {
        fm.classList.remove("flash-folded");
        flash_scrollToTop(150);
        fm.onclick = ()=>{
            fm.classList.add("flash-folded");
            setTimeout(
                () => root.document.body.removeChild(fm),
                2000//a 2s timeout before removing node, to let transitions be
            );
        };
    }

    const unfoldFlashMessages = () => {
        const toArray = arraylike => [].slice.call(arraylike);

        const foldedFlashes = toArray(root.document.querySelectorAll(".flash-folded"));

        foldedFlashes.forEach(unfoldFlashMessage);
    }

    const flash = (type, msg) => {
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

        root.document.body.prepend(FM);

        root.setTimeout(() => unfoldFlashMessage(FM), 250);
    }

    root.document.addEventListener("DOMContentLoaded", unfoldFlashMessages);

    ["success", "failure", "info"]
    .forEach(type => flash[type] = flash.bind(flash, type));

    flash.default = flash.bind(flash, "");

    return flash;
});