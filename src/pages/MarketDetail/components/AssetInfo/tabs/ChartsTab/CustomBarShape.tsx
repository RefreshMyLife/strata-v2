import type { CustomBarShapeProps } from "./types";

/**
 *  компонент для отрисовки столбца с синей линией сверху
 */
export const CustomBarShape = (props: CustomBarShapeProps) => {
  const { x, y, width, height, fill } = props;

  return (
    <g>
      {/* Основной столбец */}
      <rect x={x} y={y} width={width} height={height} fill={fill} />
      {/* Синяя линия сверху (2px) */}
      <rect x={x} y={y} width={width} height={2} fill="#2c6eff" />
    </g>
  );
};
