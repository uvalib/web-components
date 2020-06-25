class UVALibLoading extends HTMLElement {

  constructor() {
    super();

    // setup a shadowDOM
    const shadow = this.attachShadow({mode: 'open'});

    var style = document.createElement('style');
    style.textContent = `
      :host {
        display: inline-block;
        --circle-size: 100px;
        --circle-stroke-color: #2f3d4c;
      }

      .circle {
        height: var(--circle-size);
        margin-left: auto;
        margin-right: auto;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        width: var(--circle-size);
      }

      .circle__svg {
        animation: 2s linear infinite both circle__svg;
      }

      @keyframes circle__svg {
        0% {
          transform: rotateZ(0deg);
        }
        100% {
          transform: rotateZ(360deg)
        }
      }

      .circle__svg-circle {
        animation: 1.4s ease-in-out infinite both circle__svg-circle;
        fill: transparent;
        stroke: var(--circle-stroke-color);
        stroke-dasharray: 285;
        stroke-linecap: round;
        stroke-width: 10px;
        transform-origin: 50% 50%;
      }

      @keyframes circle__svg-circle {
        0%, 25% {
          stroke-dashoffset: 280;
          transform: rotate(0);
        }

        50%, 75% {
          stroke-dashoffset: 75;
          transform: rotate(45deg);
        }

        100% {
          stroke-dashoffset: 280;
          transform: rotate(360deg);
        }
      }
    `;
    shadow.appendChild(style);

    var div = document.createElement('div');
    div.innerHTML = `
      <svg class="circle__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle class="circle__svg-circle" cx="50" cy="50" r="45"/>
      </svg>
    `;
    div.className = "circle";
    shadow.appendChild(div);

  }

}

customElements.define('uvalib-loading', UVALibLoading);
