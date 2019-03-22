'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Angular Bootstrap Date/Time Picker</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/DlDateTimePickerComponent.html" data-type="entity-link">DlDateTimePickerComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/DlDateTimeInputDirective.html" data-type="entity-link">DlDateTimeInputDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/DlDateAdapter.html" data-type="entity-link">DlDateAdapter</a>
                            </li>
                            <li class="link">
                                <a href="classes/DlDateAdapterMoment.html" data-type="entity-link">DlDateAdapterMoment</a>
                            </li>
                            <li class="link">
                                <a href="classes/DlDateAdapterNative.html" data-type="entity-link">DlDateAdapterNative</a>
                            </li>
                            <li class="link">
                                <a href="classes/DlDateAdapterNumber.html" data-type="entity-link">DlDateAdapterNumber</a>
                            </li>
                            <li class="link">
                                <a href="classes/DlDateAdapterString.html" data-type="entity-link">DlDateAdapterString</a>
                            </li>
                            <li class="link">
                                <a href="classes/DlDateTimeInputChange.html" data-type="entity-link">DlDateTimeInputChange</a>
                            </li>
                            <li class="link">
                                <a href="classes/DlDateTimePickerChange.html" data-type="entity-link">DlDateTimePickerChange</a>
                            </li>
                            <li class="link">
                                <a href="classes/DlDayModelProvider.html" data-type="entity-link">DlDayModelProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/DlHourModelProvider.html" data-type="entity-link">DlHourModelProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/DlMinuteModelProvider.html" data-type="entity-link">DlMinuteModelProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/DlMonthModelProvider.html" data-type="entity-link">DlMonthModelProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/DlYearModelProvider.html" data-type="entity-link">DlYearModelProvider</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DateButton.html" data-type="entity-link">DateButton</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DlDateTimePickerModel.html" data-type="entity-link">DlDateTimePickerModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DlModelProvider.html" data-type="entity-link">DlModelProvider</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});