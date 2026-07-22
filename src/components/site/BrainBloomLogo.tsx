type BrainBloomLogoProps = {
  size?: number;
};

export function BrainBloomLogo({ size = 45 }: BrainBloomLogoProps) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: size,
        height: size,
      }}
    >

      {/* Brain */}
      <div
        style={{
          fontSize: size * 0.75,
          lineHeight: 1,
        }}
      >
        🧠
      </div>


      {/* Sparkles */}
      <span
        className="absolute text-yellow-400"
        style={{
          top: -4,
          right: -2,
          fontSize: size * 0.28,
        }}
      >
        ✨
      </span>


      <span
        className="absolute text-pink-400"
        style={{
          bottom: 2,
          left: -3,
          fontSize: size * 0.18,
        }}
      >
        ✦
      </span>


      <span
        className="absolute text-purple-400"
        style={{
          top: size * 0.25,
          left: -5,
          fontSize: size * 0.15,
        }}
      >
        ✧
      </span>

    </div>
  );
}