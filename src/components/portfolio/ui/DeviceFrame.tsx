/** Abstract device/browser frame for builds without a shippable screenshot.
 *  Fills its (relatively positioned) media container. */
export default function DeviceFrame({ name }: { name: string }) {
  return (
    <div className="pf-device" aria-hidden="true">
      <div className="pf-device__bar">
        <span />
        <span />
        <span />
      </div>
      <div className="pf-device__body">
        <div className="pf-device__sidebar">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="pf-device__main">
          <div className="pf-device__row pf-device__row--wide" />
          <div className="pf-device__grid">
            <span />
            <span />
            <span />
          </div>
          <div className="pf-device__chart" />
          <div className="pf-device__mark">{name}</div>
        </div>
      </div>
    </div>
  );
}
