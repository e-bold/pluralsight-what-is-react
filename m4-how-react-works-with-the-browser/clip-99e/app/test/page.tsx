"use client";

import { useEffect, useState } from "react";
import { towersOfHanoi } from "../../utils/tower-of-hanoi";

const numberOfDisks = 3; // Adjust this as needed

type Move = {
  moveNumber: number;
  disk: number;
  from: string;
  to: string;
  moveDescription: string;
  pegs: { [key: string]: number[] };
};

type TowersOfHanoiResult = {
  moves: number;
  duration: string;
  moveDetails?: Move[];
};

export default function Test() {
  const [result, setResult] = useState<TowersOfHanoiResult | null>(null);
  const [pegs, setPegs] = useState<{ [key: string]: number[] }>({
    A: [],
    B: [],
    C: [],
  });

  useEffect(() => {
    const hanoiResult = towersOfHanoi(numberOfDisks, true);
    setResult(hanoiResult);

    if (hanoiResult.moveDetails) {
      setPegs(hanoiResult.moveDetails[0].pegs);
    }
  }, []);

  const handleMoveClick = (move: Move) => {
    setPegs(move.pegs);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100vh",
          padding: "20px",
        }}
      >
        <div
          style={{
            width: "20%",
            overflowY: "scroll",
            padding: "1rem",
            boxSizing: "border-box",
            background: "#f8f9fa",
            borderRight: "2px solid #dee2e6",
          }}
        >
          <h1 style={{ fontSize: "1.5rem" }}>
            Towers of Hanoi ({numberOfDisks} Disks)
          </h1>
          {result && (
            <>
              <p>Moves: {result.moves}</p>
              <p>Duration: {result.duration}</p>
              {result.moveDetails && (
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {result.moveDetails.map((move) => (
                    <li
                      key={move.moveNumber}
                      onClick={() => handleMoveClick(move)}
                      style={{
                        margin: "0.5rem 0",
                        padding: "0.5rem",
                        backgroundColor: "#e9ecef",
                        cursor: "pointer",
                        borderRadius: "4px",
                      }}
                    >
                      {move.moveDescription}
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f1f3f5",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {["A", "B", "C"].map((peg) => (
              <div key={peg} style={{ textAlign: "center" }}>
                <h2>{peg}</h2>
                <div
                  style={{
                    border: "2px solid #343a40",
                    height: "400px",
                    width: "150px",
                    position: "relative",
                    backgroundColor: "#dee2e6",
                  }}
                >
                  {pegs[peg]
                    .slice()
                    .reverse()
                    .map((disk, index, arr) => (
                      <div
                        key={disk}
                        style={{
                          width: `${60 + disk * 10}%`, // Width based on disk size
                          height: "30px",
                          backgroundColor: "#6c757d",
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          position: "absolute",
                          bottom: `${index * 30}px`,
                          left: "50%",
                          transform: "translateX(-50%)",
                          fontSize: "1.2rem",
                          borderRadius: "4px",
                        }}
                      >
                        {disk}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <pre>{JSON.stringify(pegs, null, 2)}</pre>
    </div>
  );
}
