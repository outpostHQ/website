const EVENT_MAP = {
  mousemove: 'onMoving',
  touchmove: 'onMoving',
  mouseup: 'onMoveEnd',
  touchend: 'onMoveEnd',
  contextmenu: 'onMoveEnd',
};

export default function (Nude) {
  const MovableBehavior = class extends Nude.Behavior {
    static get params() {
      return {
        holder: true,
      };
    }

    connected() {
      const { host } = this;
      let { holder } = this.params;

      const rect = host.getBoundingClientRect();

      this.setAttr('place', `fixed top left ${rect.y}px ${rect.x}px`);

      if (!holder) {
        holder = host;
      } else {
        holder = host.querySelector(`[nu-id="${holder}"], [nu-${holder}]`);
      }

      if (!holder || !holder.hasAttribute('nu')) return;

      this.onMoveStart = this.onMoveStart.bind(this);
      this.onMoving = this.onMoving.bind(this);
      this.onMoveEnd = this.onMoveEnd.bind(this);

      ['mousedown', 'touchstart'].forEach((eventName) => {
        holder.addEventListener(eventName, this.onMoveStart, { passive: true });
      });
    }

    onMoveStart(evt) {
      const { host } = this;

      const rect = host.getBoundingClientRect();

      this.relativeX =
        (evt.pageX ||
          (evt.touches && evt.touches.length && evt.touches[0].pageX)) -
        window.scrollX -
        rect.x;
      this.relativeY =
        (evt.pageY ||
          (evt.touches && evt.touches.length && evt.touches[0].pageY)) -
        window.scrollY -
        rect.y;

      this.dragging = true;
      this.setMod('moving', true);

      Object.entries(EVENT_MAP).forEach(([event, handler]) => {
        window.addEventListener(event, this[handler], { passive: true });
      });

      document.documentElement.style['user-select'] = 'none';
    }

    onMoving(evt) {
      if (this.dragging) {
        this.setCoords(evt);
      }
    }

    onMoveEnd() {
      if (this.dragging) {
        this.dragging = false;
        this.setMod('moving', false);
        Object.entries(EVENT_MAP).forEach(([event, handler]) => {
          window.removeEventListener(event, this[handler]);
        });

        delete document.documentElement.style['user-select'];
      }
    }

    setCoords(evt) {
      const { host } = this;

      const pageX =
        (evt.pageX ||
          (evt.touches && evt.touches.length && evt.touches[0].pageX)) -
        window.scrollX -
        this.relativeX;
      const pageY =
        (evt.pageY ||
          (evt.touches && evt.touches.length && evt.touches[0].pageY)) -
        window.scrollY -
        this.relativeY;

      host.style.left = `${pageX}px`;
      host.style.top = `${pageY}px`;
    }
  };

  Nude.behaviors.define('movable', () => MovableBehavior);
}
