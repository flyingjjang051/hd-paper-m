function makeCircleTxt(txt, _radius = 170, _dir = 1) {
  const circleTxt = document.querySelector(txt);
  const circleType = new CircleType(circleTxt);
  circleType.radius(_radius).dir(_dir);
}
