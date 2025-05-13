import { stepA } from "./stepA";
import { stepB } from "./stepB";
import { stepC } from "./stepC";

export async function prosesPromise() {
    try {
        const hasil1 = await stepA();
        const hasil2 = await stepB(hasil1);
        const hasil3 = await stepC(hasil2);
        console.log("Akhir : ", hasil3);
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
}

// proses()
