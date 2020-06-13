/**
 *  <public-record> Public recording web component
 *  @Author: Russ Stratfull 2020
 */
import {PublicRecordCls} from "./PublicRecordCls";
import * as S from './public-strings';
import moduleMethods from './publicMethods';

export function createPublicRecord(options) {
    function setOptions(options) {
        return class PublicRecordComponent extends HTMLElement {

            constructor() {
                super();
                this.cls = new PublicRecordCls(options);
            }

            /**
             *
             * @param options
             * @ignore
             */
            setOptions(options) {
                return this.cls.setOptions(options);
            }

            /**
             *
             * @return {Object}
             * @ignore
             */
            getOptions() {
                return this.cls.getOptions();
            }

            /**
             *
             * @param level
             * @param message
             * @param args
             * @return {string}
             * @ignore
             */
            logMessage(level, message, ...args) {
                return this.cls.logMessage(level, message, ...args);
            }

            /**
             *
             * @param options
             * @param filters
             * @return {string}
             * @ignore
             */
            printMessages(options, filters) {
                return this.cls.printMessages(options, filters);
            }

            /**
             * Clears log messages
             * @ignore
             */
            clearMessages() {
                this.cls.clearMessages();
            }

            // Lifecycle callbacks
            // todo...
            // connectedCallback() {
            //
            // }

            // disconnectedCallback() {
            //
            // }

            // attributeChangedCallback() {
            //
            // }
        };
    }

    window.customElements.define(S.PUBLIC_RECORD_COMPONENT, setOptions(options));
    return moduleMethods(document.createElement(S.PUBLIC_RECORD_COMPONENT));


}
