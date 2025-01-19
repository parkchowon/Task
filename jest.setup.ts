import "@testing-library/jest-dom/jest-globals";
import { TextEncoder } from "util";

if (typeof window !== "undefined") {
  // 브라우저 환경에서 TextEncoder, TextDecoder가 이미 제공되므로 추가하지 않음
  if (!window.TextEncoder) {
    // jsdom 환경에서만 TextEncoder 폴리필을 추가
    global.TextEncoder = TextEncoder;
  }
}
