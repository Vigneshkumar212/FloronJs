/**
 * module description
 * @module floronJs
 */

const styles = {
    "align-content": "",
    "align-items": "",
    "align-self": "",
    "all": "",
    "animation": "",
    "animation-delay": "",
    "animation-direction": "",
    "animation-duration": "",
    "animation-fill-mode": "",
    "animation-iteration-count": "",
    "animation-name": "",
    "animation-play-state": "",
    "animation-timing-function": "",
    "backdrop-filter": "",
    "backface-visibility": "",
    "background": "",
    "background-attachment": "",
    "background-blend-mode": "",
    "background-clip": "",
    "background-color": "",
    "background-image": "",
    "background-origin": "",
    "background-position": "",
    "background-repeat": "",
    "background-size": "",
    "block-size": "",
    "border": "",
    "border-block": "",
    "border-block-color": "",
    "border-block-end": "",
    "border-block-end-color": "",
    "border-block-end-style": "",
    "border-block-end-width": "",
    "border-block-start": "",
    "border-block-start-color": "",
    "border-block-start-style": "",
    "border-block-start-width": "",
    "border-block-style": "",
    "border-block-width": "",
    "border-bottom": "",
    "border-bottom-color": "",
    "border-bottom-left-radius": "",
    "border-bottom-right-radius": "",
    "border-bottom-style": "",
    "border-bottom-width": "",
    "border-collapse": "",
    "border-color": "",
    "border-end-end-radius": "",
    "border-end-start-radius": "",
    "border-image": "",
    "border-image-outset": "",
    "border-image-repeat": "",
    "border-image-slice": "",
    "border-image-source": "",
    "border-image-width": "",
    "border-inline": "",
    "border-inline-color": "",
    "border-inline-end": "",
    "border-inline-end-color": "",
    "border-inline-end-style": "",
    "border-inline-end-width": "",
    "border-inline-start": "",
    "border-inline-start-color": "",
    "border-inline-start-style": "",
    "border-inline-start-width": "",
    "border-inline-style": "",
    "border-inline-width": "",
    "border-left": "",
    "border-left-color": "",
    "border-left-style": "",
    "border-left-width": "",
    "border-radius": "",
    "border-right": "",
    "border-right-color": "",
    "border-right-style": "",
    "border-right-width": "",
    "border-spacing": "",
    "border-start-end-radius": "",
    "border-start-start-radius": "",
    "border-style": "",
    "border-top": "",
    "border-top-color": "",
    "border-top-left-radius": "",
    "border-top-right-radius": "",
    "border-top-style": "",
    "border-top-width": "",
    "border-width": "",
    "bottom": "",
    "box-decoration-break": "",
    "box-shadow": "",
    "box-sizing": "",
    "break-after": "",
    "break-before": "",
    "break-inside": "",
    "caption-side": "",
    "caret-color": "",
    "clear": "",
    "clip": "",
    "clip-path": "",
    "color": "",
    "column-count": "",
    "column-fill": "",
    "column-gap": "",
    "column-rule": "",
    "column-rule-color": "",
    "column-rule-style": "",
    "column-rule-width": "",
    "column-span": "",
    "column-width": "",
    "columns": "",
    "content": "",
    "counter-increment": "",
    "counter-reset": "",
    "cursor": "",
    "direction": "",
    "display": "",
    "empty-cells": "",
    "filter": "",
    "flex": "",
    "flex-basis": "",
    "flex-direction": "",
    "flex-flow": "",
    "flex-grow": "",
    "flex-shrink": "",
    "flex-wrap": "",
    "float": "",
    "font": "",
    "font-family": "",
    "font-feature-settings": "",
    "font-kerning": "",
    "font-language-override": "",
    "font-optical-sizing": "",
    "font-size": "",
    "font-size-adjust": "",
    "font-stretch": "",
    "font-style": "",
    "font-synthesis": "",
    "font-variant": "",
    "font-variant-alternates": "",
    "font-variant-caps": "",
    "font-variant-east-asian": "",
    "font-variant-ligatures": "",
    "font-variant-numeric": "",
    "font-variant-position": "",
    "font-weight": "",
    "gap": "",
    "grid": "",
    "grid-area": "",
    "grid-auto-columns": "",
    "grid-auto-flow": "",
    "grid-auto-rows": "",
    "grid-column": "",
    "grid-column-end": "",
    "grid-column-gap": "",
    "grid-column-start": "",
    "grid-gap": "",
    "grid-row": "",
    "grid-row-end": "",
    "grid-row-gap": "",
    "grid-row-start": "",
    "grid-template": "",
    "grid-template-areas": "",
    "grid-template-columns": "",
    "grid-template-rows": "",
    "hanging-punctuation": "",
    "height": "",
    "hyphens": "",
    "image-orientation": "",
    "image-rendering": "",
    "image-resolution": "",
    "initial-letter": "",
    "initial-letter-align": "",
    "inline-size": "",
    "inset": "",
    "inset-block": "",
    "inset-block-end": "",
    "inset-block-start": "",
    "inset-inline": "",
    "inset-inline-end": "",
    "inset-inline-start": "",
    "isolation": "",
    "justify-content": "",
    "justify-items": "",
    "justify-self": "",
    "left": "",
    "letter-spacing": "",
    "line-break": "",
    "line-height": "",
    "list-style": "",
    "list-style-image": "",
    "list-style-position": "",
    "list-style-type": "",
    "margin": "",
    "margin-block": "",
    "margin-block-end": "",
    "margin-block-start": "",
    "margin-bottom": "",
    "margin-inline": "",
    "margin-inline-end": "",
    "margin-inline-start": "",
    "margin-left": "",
    "margin-right": "",
    "margin-top": "",
    "mask": "",
    "mask-border": "",
    "mask-border-mode": "",
    "mask-border-outset": "",
    "mask-border-repeat": "",
    "mask-border-slice": "",
    "mask-border-source": "",
    "mask-border-width": "",
    "mask-clip": "",
    "mask-composite": "",
    "mask-image": "",
    "mask-mode": "",
    "mask-origin": "",
    "mask-position": "",
    "mask-repeat": "",
    "mask-size": "",
    "mask-type": "",
    "max-block-size": "",
    "max-height": "",
    "max-inline-size": "",
    "max-width": "",
    "min-block-size": "",
    "min-height": "",
    "min-inline-size": "",
    "min-width": "",
    "mix-blend-mode": "",
    "object-fit": "",
    "object-position": "",
    "offset": "",
    "offset-anchor": "",
    "offset-distance": "",
    "offset-path": "",
    "offset-position": "",
    "offset-rotate": "",
    "opacity": "",
    "order": "",
    "orphans": "",
    "outline": "",
    "outline-color": "",
    "outline-offset": "",
    "outline-style": "",
    "outline-width": "",
    "overflow": "",
    "overflow-anchor": "",
    "overflow-block": "",
    "overflow-inline": "",
    "overflow-wrap": "",
    "overflow-x": "",
    "overflow-y": "",
    "overscroll-behavior": "",
    "overscroll-behavior-block": "",
    "overscroll-behavior-inline": "",
    "overscroll-behavior-x": "",
    "overscroll-behavior-y": "",
    "padding": "",
    "padding-block": "",
    "padding-block-end": "",
    "padding-block-start": "",
    "padding-bottom": "",
    "padding-inline": "",
    "padding-inline-end": "",
    "padding-inline-start": "",
    "padding-left": "",
    "padding-right": "",
    "padding-top": "",
    "page-break-after": "",
    "page-break-before": "",
    "page-break-inside": "",
    "paint-order": "",
    "perspective": "",
    "perspective-origin": "",
    "place-content": "",
    "place-items": "",
    "place-self": "",
    "pointer-events": "",
    "position": "",
    "quotes": "",
    "resize": "",
    "right": "",
    "rotate": "",
    "row-gap": "",
    "ruby-align": "",
    "ruby-merge": "",
    "ruby-position": "",
    "scale": "",
    "scroll-behavior": "",
    "scroll-margin": "",
    "scroll-margin-block": "",
    "scroll-margin-block-end": "",
    "scroll-margin-block-start": "",
    "scroll-margin-bottom": "",
    "scroll-margin-inline": "",
    "scroll-margin-inline-end": "",
    "scroll-margin-inline-start": "",
    "scroll-margin-left": "",
    "scroll-margin-right": "",
    "scroll-margin-top": "",
    "scroll-padding": "",
    "scroll-padding-block": "",
    "scroll-padding-block-end": "",
    "scroll-padding-block-start": "",
    "scroll-padding-bottom": "",
    "scroll-padding-inline": "",
    "scroll-padding-inline-end": "",
    "scroll-padding-inline-start": "",
    "scroll-padding-left": "",
    "scroll-padding-right": "",
    "scroll-padding-top": "",
    "scroll-snap-align": "",
    "scroll-snap-stop": "",
    "scroll-snap-type": "",
    "shape-image-threshold": "",
    "shape-margin": "",
    "shape-outside": "",
    "tab-size": "",
    "table-layout": "",
    "text-align": "",
    "text-align-last": "",
    "text-combine-upright": "",
    "text-decoration": "",
    "text-decoration-color": "",
    "text-decoration-line": "",
    "text-decoration-skip": "",
    "text-decoration-skip-ink": "",
    "text-decoration-style": "",
    "text-decoration-thickness": "",
    "text-emphasis": "",
    "text-emphasis-color": "",
    "text-emphasis-position": "",
    "text-emphasis-style": "",
    "text-indent": "",
    "text-justify": "",
    "text-orientation": "",
    "text-overflow": "",
    "text-rendering": "",
    "text-shadow": "",
    "text-size-adjust": "",
    "text-transform": "",
    "text-underline-position": "",
    "top": "",
    "touch-action": "",
    "transform": "",
    "transform-box": "",
    "transform-origin": "",
    "transform-style": "",
    "transition": "",
    "transition-delay": "",
    "transition-duration": "",
    "transition-property": "",
    "transition-timing-function": "",
    "translate": "",
    "unicode-bidi": "",
    "user-select": "",
    "vertical-align": "",
    "visibility": "",
    "white-space": "",
    "widows": "",
    "width": "",
    "will-change": "",
    "word-break": "",
    "word-spacing": "",
    "word-wrap": "",
    "writing-mode": "",
    "z-index": ""
}
const htmlAttributes = {
    "accept": "defaultFloronJsValues",
    "accept-charset": "defaultFloronJsValues",
    "accesskey": "defaultFloronJsValues",
    "action": "defaultFloronJsValues",
    "align": "defaultFloronJsValues",
    "alt": "defaultFloronJsValues",
    "async": "defaultFloronJsValues",
    "autocapitalize": "defaultFloronJsValues",
    "autocomplete": "defaultFloronJsValues",
    "autofocus": "defaultFloronJsValues",
    "autoplay": "defaultFloronJsValues",
    "background": "defaultFloronJsValues",
    "bgcolor": "defaultFloronJsValues",
    "border": "defaultFloronJsValues",
    "charset": "defaultFloronJsValues",
    "checked": "defaultFloronJsValues",
    "cite": "defaultFloronJsValues",
    "class": "defaultFloronJsValues",
    "color": "defaultFloronJsValues",
    "cols": "defaultFloronJsValues",
    "colspan": "defaultFloronJsValues",
    "content": "defaultFloronJsValues",
    "contenteditable": "defaultFloronJsValues",
    "controls": "defaultFloronJsValues",
    "coords": "defaultFloronJsValues",
    "crossorigin": "defaultFloronJsValues",
    "data": "defaultFloronJsValues",
    "datetime": "defaultFloronJsValues",
    "default": "defaultFloronJsValues",
    "defer": "defaultFloronJsValues",
    "dir": "defaultFloronJsValues",
    "disabled": "defaultFloronJsValues",
    "download": "defaultFloronJsValues",
    "draggable": "defaultFloronJsValues",
    "dropzone": "defaultFloronJsValues",
    "enctype": "defaultFloronJsValues",
    "for": "defaultFloronJsValues",
    "form": "defaultFloronJsValues",
    "formaction": "defaultFloronJsValues",
    "headers": "defaultFloronJsValues",
    "height": "defaultFloronJsValues",
    "hidden": "defaultFloronJsValues",
    "high": "defaultFloronJsValues",
    "href": "defaultFloronJsValues",
    "hreflang": "defaultFloronJsValues",
    "http-equiv": "defaultFloronJsValues",
    "icon": "defaultFloronJsValues",
    "id": "defaultFloronJsValues",
    "importance": "defaultFloronJsValues",
    "integrity": "defaultFloronJsValues",
    "intrinsicsize": "defaultFloronJsValues",
    "inputmode": "defaultFloronJsValues",
    "ismap": "defaultFloronJsValues",
    "itemid": "defaultFloronJsValues",
    "itemprop": "defaultFloronJsValues",
    "itemref": "defaultFloronJsValues",
    "itemscope": "defaultFloronJsValues",
    "itemtype": "defaultFloronJsValues",
    "kind": "defaultFloronJsValues",
    "label": "defaultFloronJsValues",
    "lang": "defaultFloronJsValues",
    "list": "defaultFloronJsValues",
    "loading": "defaultFloronJsValues",
    "loop": "defaultFloronJsValues",
    "low": "defaultFloronJsValues",
    "manifest": "defaultFloronJsValues",
    "max": "defaultFloronJsValues",
    "maxlength": "defaultFloronJsValues",
    "media": "defaultFloronJsValues",
    "method": "defaultFloronJsValues",
    "min": "defaultFloronJsValues",
    "minlength": "defaultFloronJsValues",
    "multiple": "defaultFloronJsValues",
    "muted": "defaultFloronJsValues",
    "name": "defaultFloronJsValues",
    "novalidate": "defaultFloronJsValues",
    "open": "defaultFloronJsValues",
    "optimum": "defaultFloronJsValues",
    "pattern": "defaultFloronJsValues",
    "ping": "defaultFloronJsValues",
    "placeholder": "defaultFloronJsValues",
    "playsinline": "defaultFloronJsValues",
    "poster": "defaultFloronJsValues",
    "preload": "defaultFloronJsValues",
    "radiogroup": "defaultFloronJsValues",
    "readonly": "defaultFloronJsValues",
    "referrerpolicy": "defaultFloronJsValues",
    "rel": "defaultFloronJsValues",
    "required": "defaultFloronJsValues",
    "reversed": "defaultFloronJsValues",
    "rows": "defaultFloronJsValues",
    "rowspan": "defaultFloronJsValues",
    "sandbox": "defaultFloronJsValues",
    "scope": "defaultFloronJsValues",
    "scoped": "defaultFloronJsValues",
    "selected": "defaultFloronJsValues",
    "shape": "defaultFloronJsValues",
    "size": "defaultFloronJsValues",
    "sizes": "defaultFloronJsValues",
    "slot": "defaultFloronJsValues",
    "span": "defaultFloronJsValues",
    "spellcheck": "defaultFloronJsValues",
    "src": "defaultFloronJsValues",
    "srcdoc": "defaultFloronJsValues",
    "srclang": "defaultFloronJsValues",
    "srcset": "defaultFloronJsValues",
    "start": "defaultFloronJsValues",
    "step": "defaultFloronJsValues",
    "style": "defaultFloronJsValues",
    "summary": "defaultFloronJsValues",
    "tabindex": "defaultFloronJsValues",
    "target": "defaultFloronJsValues",
    "title": "defaultFloronJsValues",
    "translate": "defaultFloronJsValues",
    "type": "defaultFloronJsValues",
    "typemustmatch": "defaultFloronJsValues",
    "usemap": "defaultFloronJsValues",
    "value": "defaultFloronJsValues",
    "width": "defaultFloronJsValues",
    "wrap": "defaultFloronJsValues"
}

class Floron {
    constructor() {
        this.styleTag = document.createElement("style");
        document.head.append(this.styleTag);
    }

    generateUUID(format = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx") {
        var d = new Date().getTime();//Timestamp
        var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
        return format.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16;//random number between 0 and 16
            if (d > 0) {//Use timestamp until depleted
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            } else {//Use microseconds since page-load if supported
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }



    createElement({ type, stylesProps = styles, hoverProperties = styles, properties = htmlAttributes, children = new Array, content = new String }) {
        const tag = document.createElement(type);
        tag.innerHTML = content;

        // Set properties
        for (const [key, value] of Object.entries(properties)) {
            if (value != "defaultFloronJsValues") {
                tag[key] = value;
            }
        }

        var className = this.generateUUID("FJCxxxx-x-xx")
        tag.classList.add(className)


        // Apply styles
        if(stylesProps){
            var string = `.${className} {`
            for (const [key, value] of Object.entries(stylesProps)) {
                if (value != "") {
                    tag[key] = value;
                    string += `${key} : ${value};`
                }
            }
            string += `}`;
            this.styleTag.append(string);
        }

        console.log(hoverProperties);
        if (hoverProperties) {
            var string = `.${className}:hover {`
            for (const [key, value] of Object.entries(hoverProperties)) {
                if (value != "") {
                    tag[key] = value;
                    string += `${key} : ${value};`
                }
            }
            string += `}`;
            this.styleTag.append(string);
        }
        children.forEach(e => {
            tag.append(e);
        })
        return tag;
    }
    build(elements = []) {
        for (const i in elements) {
            document.body.append(elements[i]);
        }
    }
    pageStyle(stylesProps = styles) {
        const styleTag = document.createElement("style");
        var styleCode = "body,html {";
        for (const key in stylesProps) {
            if (Object.hasOwnProperty.call(stylesProps, key)) {
                const element = stylesProps[key];
                styleCode += key + ":" + element + ";"
            }
        }
        styleCode += "}";
        styleTag.innerHTML = styleCode;
        document.head.append(styleTag)
    }
    defaultStyleProperties(stylesProps = styles) {
        const styleTag = document.createElement("style");
        var styleCode = "* {";
        for (const key in stylesProps) {
            if (Object.hasOwnProperty.call(stylesProps, key)) {
                const element = stylesProps[key];
                styleCode += key + ":" + element + ";"
            }
        }
        styleCode += "}";
        styleTag.innerHTML = styleCode;
        document.head.append(styleTag)
    }

    //other tag
    a({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "a";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    abbr({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "abbr";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    address({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "address";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    area({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "area";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    article({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "article";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    aside({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "aside";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    audio({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "audio";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    b({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "b";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    base({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "base";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    bdi({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "bdi";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    bdo({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "bdo";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    blockquote({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "blockquote";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    body({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "body";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    br({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "br";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    button({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "button";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    canvas({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "canvas";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    caption({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "caption";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    cite({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "cite";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    code({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "code";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    col({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "col";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    colgroup({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "colgroup";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    data({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "data";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    datalist({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "datalist";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    dd({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "dd";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    del({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "del";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    details({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "details";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    dfn({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "dfn";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    dialog({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "dialog";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    div({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "div";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    dl({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "dl";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    dt({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "dt";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    em({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "em";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    embed({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "embed";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    fieldset({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "fieldset";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    figcaption({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "figcaption";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    figure({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "figure";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    footer({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "footer";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    form({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "form";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    h1({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "h1";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    h2({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "h2";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    h3({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "h3";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    h4({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "h4";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    h5({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "h5";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    h6({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "h6";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    head({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "head";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    header({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "header";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    hgroup({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "hgroup";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    hr({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "hr";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    html({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "html";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    i({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "i";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    iframe({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "iframe";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    img({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "img";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    input({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "input";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    ins({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "ins";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    kbd({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "kbd";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    label({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "label";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    legend({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "legend";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    li({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "li";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    link({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "link";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    main({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "main";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    map({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "map";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    mark({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "mark";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    meta({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "meta";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    meter({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "meter";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    nav({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "nav";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    noscript({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "noscript";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    object({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "object";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    ol({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "ol";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    optgroup({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "optgroup";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    option({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "option";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    output({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "output";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    p({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "p";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    param({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "param";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    picture({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "picture";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    pre({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "pre";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    progress({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "progress";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    q({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "q";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    rp({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "rp";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    rt({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "rt";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    ruby({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "ruby";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    s({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "s";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    samp({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "samp";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    script({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "script";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    section({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "section";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    select({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "select";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    slot({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "slot";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    small({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "small";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    source({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "source";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    span({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "span";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    strong({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "strong";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    style({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "style";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    sub({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "sub";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    summary({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "summary";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    sup({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "sup";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    table({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "table";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    tbody({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "tbody";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    td({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "td";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    template({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "template";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    textarea({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "textarea";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    tfoot({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "tfoot";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    th({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "th";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    thead({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "thead";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    time({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "time";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    title({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "title";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    tr({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "tr";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    track({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "track";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    u({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "u";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    ul({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "ul";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    var({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "var";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    video({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "video";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
    wbr({ type = new String, stylesProps = styles, properties = htmlAttributes, children = new Array, content = new String } = {}) {
        type = "wbr";
        return this.createElement({ type, stylesProps, properties, children, content });
    }
};

export default new Floron();