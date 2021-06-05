import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "40cb5e843ba4415a80db5eef99b5c942";
const token =
  "006c4ff3e97883c46a784e9727361a67537IAD3oHOnWCrtlhpPhkXEG2YUcVAogngB6KSfuBLrb6L1fGTNKL8AAAAAEADIUmqkuKm9YAEAAQBXVb1g";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
