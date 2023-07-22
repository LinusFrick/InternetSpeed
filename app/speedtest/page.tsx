'use client';
import { useEffect, useState, useCallback } from "react"

export default function Page(){
    const [downloadSpeed, setDownloadSpeed] = useState<number | null>(null);
    const [uploadSpeed, setUploadSpeed] = useState<number | null>(null);
    const [loading, setLoading] = useState<Boolean>(false);

    const NUM_TESTS = 5;
    const TEST_DELAY = 1000;

    const testDownloadSpeed = useCallback(async () => {
        setLoading(true);
        let speeds = [];
        for (let i = 0; i < NUM_TESTS; i++) {
          const startTime = Date.now();
          await fetch("/api/download");
          const endTime = Date.now();
    

          const durationInSec = (endTime - startTime) / 1000;
          const fileSizeInBits = 1e6 * 8;
          const speedMbps = (fileSizeInBits / durationInSec) / 1e6;
          speeds.push(speedMbps);
    
          await new Promise((resolve) => setTimeout(resolve, TEST_DELAY));
        }
    

        const averageSpeed = speeds.reduce((a, b) => a + b, 0) / NUM_TESTS;
        setDownloadSpeed(averageSpeed);
      }, []);
    
      const testUploadSpeed = useCallback(async () => {
        let speeds = [];
        for (let i = 0; i < NUM_TESTS; i++) {
          const blob = new Blob([new ArrayBuffer(1e6)], { type: "octet/stream" });
    
          const startTime = Date.now();
          await fetch("/api/upload", { method: "POST", body: blob });
          const endTime = Date.now();
    

          const durationInSec = (endTime - startTime) / 1000;
          const fileSizeInBits = 1e6 * 8;
          const speedMbps = (fileSizeInBits / durationInSec) / 1e6;
          speeds.push(speedMbps);
    
          await new Promise((resolve) => setTimeout(resolve, TEST_DELAY));
        }
        
        const averageSpeed = speeds.reduce((a, b) => a + b, 0) / NUM_TESTS;
    
        setUploadSpeed(averageSpeed);
        setLoading(false);
      }, []);
    
      const runSpeedTest = useCallback(async () => {
        await testDownloadSpeed();
        await testUploadSpeed();
      }, [testDownloadSpeed, testUploadSpeed]);
    
      useEffect(() => {
        runSpeedTest();
      }, [runSpeedTest]);
    

    return(
        <div>
            <h1>Speed Test</h1>
            {downloadSpeed && <p>Download Speed: {downloadSpeed} Mbps</p>}
            {uploadSpeed && <p>Upload Speed: {uploadSpeed} Mbps</p>}
            {loading && <p>Testing....</p>}
        </div>
    )
}