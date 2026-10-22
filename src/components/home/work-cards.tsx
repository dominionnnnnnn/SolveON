import Link from "next/link";

// Placeholder case-study cards from the design. Each visual is decorative;
// swap in real screenshots and copy once projects are ready.
export function WorkCards() {
  return (
    <>
      <Link className="wcard block" href="/work">
        <div
          className="wmedia"
          style={{
            position: "relative",
            height: "360px",
            borderRadius: "16px",
            overflow: "hidden",
            background:
              "radial-gradient(400px 260px at 85% 100%,rgba(74,222,128,.28),transparent 70%),#0B0B0B",
            color: "#fff",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "28px",
              top: "26px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            <span className="chip">Case study</span>
            <span style={{ opacity: ".5" }}>|</span>
            <span>[Client logo]</span>
          </div>
          <div
            style={{
              position: "absolute",
              left: "28px",
              bottom: "30px",
              maxWidth: "44%",
              fontSize: "24px",
              lineHeight: "1.3",
              fontWeight: "600",
              letterSpacing: "-0.02em",
              color: "#4ADE80",
            }}
          >
            [One line on what this product does for its users.]
          </div>
          <div
            style={{
              position: "absolute",
              right: "44px",
              top: "44px",
              width: "170px",
              height: "340px",
              borderRadius: "30px",
              background: "#262626",
              padding: "7px",
              boxSizing: "border-box",
              transform: "rotate(-5deg)",
            }}
          >
            <div
              style={{
                height: "100%",
                borderRadius: "24px",
                background: "#fff",
                padding: "14px 12px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  height: "10px",
                  width: "60%",
                  borderRadius: "999px",
                  background: "#111",
                }}
              ></div>
              <div
                style={{
                  marginTop: "12px",
                  height: "70px",
                  borderRadius: "12px",
                  background: "#4ADE80",
                }}
              ></div>
              <div
                style={{
                  marginTop: "10px",
                  height: "34px",
                  borderRadius: "10px",
                  background: "#F3FAF4",
                }}
              ></div>
              <div
                style={{
                  marginTop: "6px",
                  height: "34px",
                  borderRadius: "10px",
                  background: "#F3FAF4",
                }}
              ></div>
              <div
                style={{
                  marginTop: "6px",
                  height: "34px",
                  borderRadius: "10px",
                  background: "#F3FAF4",
                }}
              ></div>
              <div
                style={{
                  marginTop: "12px",
                  height: "30px",
                  borderRadius: "999px",
                  background: "#111",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "20px",
            paddingTop: "16px",
            borderTop: "1px solid rgba(17,17,17,.12)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              margin: "0",
              fontSize: "19px",
              fontWeight: "600",
              letterSpacing: "-0.01em",
            }}
          >
            [Project name]
          </h3>
          <span aria-hidden="true">→</span>
        </div>
        <p className="muted" style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.6" }}>
          [Two lines on the problem, what we built and the result it delivered.]
        </p>
        <p
          style={{
            margin: "10px 0 0",
            fontSize: "13px",
            color: "rgba(17,17,17,.5)",
          }}
        >
          Mobile app · Backend/API
        </p>
      </Link>
      <Link className="wcard block" href="/work">
        <div
          className="wmedia"
          style={{
            position: "relative",
            height: "360px",
            borderRadius: "16px",
            overflow: "hidden",
            background: "#DCFCE7",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "28px",
              top: "26px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            <span className="chip">Case study</span>
            <span style={{ opacity: ".4" }}>|</span>
            <span>[Client logo]</span>
          </div>
          <div
            style={{
              position: "absolute",
              left: "28px",
              bottom: "30px",
              maxWidth: "40%",
              fontSize: "24px",
              lineHeight: "1.3",
              fontWeight: "600",
              letterSpacing: "-0.02em",
            }}
          >
            [One line on what this product does for its users.]
          </div>
          <div
            style={{
              position: "absolute",
              right: "-30px",
              top: "64px",
              width: "58%",
              height: "300px",
              borderRadius: "12px",
              background: "#fff",
              boxShadow: "0 20px 50px rgba(21,128,61,.18)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "26px",
                background: "#F4F5F2",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "0 10px",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "999px",
                  background: "#D9DCD6",
                }}
              ></span>
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "999px",
                  background: "#D9DCD6",
                }}
              ></span>
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "999px",
                  background: "#D9DCD6",
                }}
              ></span>
            </div>
            <div style={{ display: "flex", height: "100%" }}>
              <div style={{ width: "70px", background: "#F3FAF4" }}></div>
              <div style={{ flex: "1", padding: "14px" }}>
                <div
                  style={{
                    height: "10px",
                    width: "45%",
                    borderRadius: "999px",
                    background: "#111",
                  }}
                ></div>
                <div
                  style={{
                    marginTop: "12px",
                    display: "grid",
                    gridTemplateColumns: "repeat(3,minmax(0,1fr))",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      height: "44px",
                      borderRadius: "8px",
                      background: "#F3FAF4",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "44px",
                      borderRadius: "8px",
                      background: "#F3FAF4",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "44px",
                      borderRadius: "8px",
                      background: "#4ADE80",
                    }}
                  ></div>
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    height: "110px",
                    borderRadius: "8px",
                    background: "linear-gradient(180deg,#F3FAF4,#fff)",
                    border: "1px solid #EEF0EC",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "20px",
            paddingTop: "16px",
            borderTop: "1px solid rgba(17,17,17,.12)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              margin: "0",
              fontSize: "19px",
              fontWeight: "600",
              letterSpacing: "-0.01em",
            }}
          >
            [Project name]
          </h3>
          <span aria-hidden="true">→</span>
        </div>
        <p className="muted" style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.6" }}>
          [Two lines on the problem, what we built and the result it delivered.]
        </p>
        <p
          style={{
            margin: "10px 0 0",
            fontSize: "13px",
            color: "rgba(17,17,17,.5)",
          }}
        >
          Web app · SaaS
        </p>
      </Link>
      <Link className="wcard block" href="/work">
        <div
          className="wmedia"
          style={{
            position: "relative",
            height: "360px",
            borderRadius: "16px",
            overflow: "hidden",
            background: "#fff",
            border: "1px solid rgba(17,17,17,.1)",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "28px",
              top: "26px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            <span className="chip">Case study</span>
            <span style={{ opacity: ".4" }}>|</span>
            <span>[Client logo]</span>
          </div>
          <div
            style={{
              position: "absolute",
              left: "28px",
              bottom: "30px",
              maxWidth: "42%",
              fontSize: "24px",
              lineHeight: "1.3",
              fontWeight: "600",
              letterSpacing: "-0.02em",
              color: "#15803D",
            }}
          >
            [One line on what this product does for its users.]
          </div>
          <div
            style={{
              position: "absolute",
              right: "36px",
              top: "70px",
              width: "250px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              style={{
                alignSelf: "flex-start",
                maxWidth: "80%",
                padding: "10px 13px",
                borderRadius: "14px 14px 14px 4px",
                background: "#F1F2EE",
                fontSize: "13px",
              }}
            >
              Hi, I want to pay for my order
            </div>
            <div
              style={{
                alignSelf: "flex-end",
                maxWidth: "85%",
                padding: "10px 13px",
                borderRadius: "14px 14px 4px 14px",
                background: "#DCFCE7",
                fontSize: "13px",
              }}
            >
              Sure! Here is your secure payment link
            </div>
            <div
              style={{
                alignSelf: "flex-end",
                width: "85%",
                padding: "12px",
                borderRadius: "14px",
                background: "#111",
                color: "#fff",
                fontSize: "12px",
              }}
            >
              <div style={{ opacity: ".6" }}>Order #[0000]</div>
              <div
                style={{
                  marginTop: "6px",
                  height: "30px",
                  borderRadius: "999px",
                  background: "#4ADE80",
                  color: "#111",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Pay now
              </div>
            </div>
            <div
              style={{
                alignSelf: "flex-start",
                maxWidth: "70%",
                padding: "10px 13px",
                borderRadius: "14px 14px 14px 4px",
                background: "#F1F2EE",
                fontSize: "13px",
              }}
            >
              Done, thank you!
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "20px",
            paddingTop: "16px",
            borderTop: "1px solid rgba(17,17,17,.12)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              margin: "0",
              fontSize: "19px",
              fontWeight: "600",
              letterSpacing: "-0.01em",
            }}
          >
            [Project name]
          </h3>
          <span aria-hidden="true">→</span>
        </div>
        <p className="muted" style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.6" }}>
          [Two lines on the problem, what we built and the result it delivered.]
        </p>
        <p
          style={{
            margin: "10px 0 0",
            fontSize: "13px",
            color: "rgba(17,17,17,.5)",
          }}
        >
          AI/WhatsApp agent · Backend/API
        </p>
      </Link>
      <Link className="wcard block" href="/work">
        <div
          className="wmedia"
          style={{
            position: "relative",
            height: "360px",
            borderRadius: "16px",
            overflow: "hidden",
            background: "#4ADE80",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "28px",
              top: "26px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            <span className="chip">Case study</span>
            <span style={{ opacity: ".4" }}>|</span>
            <span>[Client logo]</span>
          </div>
          <div
            style={{
              position: "absolute",
              left: "28px",
              bottom: "30px",
              maxWidth: "42%",
              fontSize: "24px",
              lineHeight: "1.3",
              fontWeight: "600",
              letterSpacing: "-0.02em",
            }}
          >
            [One line on what this product does for its users.]
          </div>
          <div
            style={{
              position: "absolute",
              right: "30px",
              top: "60px",
              width: "52%",
              display: "grid",
              gridTemplateColumns: "repeat(2,minmax(0,1fr))",
              gap: "10px",
            }}
          >
            <div
              style={{
                height: "90px",
                borderRadius: "12px",
                background: "#111",
                padding: "12px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  height: "8px",
                  width: "50%",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,.4)",
                }}
              ></div>
              <div
                style={{
                  marginTop: "14px",
                  height: "22px",
                  width: "60%",
                  borderRadius: "6px",
                  background: "#4ADE80",
                }}
              ></div>
            </div>
            <div
              style={{
                height: "90px",
                borderRadius: "12px",
                background: "#fff",
                padding: "12px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  height: "8px",
                  width: "50%",
                  borderRadius: "999px",
                  background: "#D9DCD6",
                }}
              ></div>
              <div
                style={{
                  marginTop: "14px",
                  height: "22px",
                  width: "70%",
                  borderRadius: "6px",
                  background: "#111",
                }}
              ></div>
            </div>
            <div
              style={{
                gridColumn: "span 2",
                height: "150px",
                borderRadius: "12px",
                background: "#fff",
                padding: "14px",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "flex-end",
                gap: "7px",
              }}
            >
              <span
                style={{
                  flex: "1",
                  height: "40%",
                  borderRadius: "4px",
                  background: "#BBF7D0",
                }}
              ></span>
              <span
                style={{
                  flex: "1",
                  height: "60%",
                  borderRadius: "4px",
                  background: "#BBF7D0",
                }}
              ></span>
              <span
                style={{
                  flex: "1",
                  height: "50%",
                  borderRadius: "4px",
                  background: "#BBF7D0",
                }}
              ></span>
              <span
                style={{
                  flex: "1",
                  height: "80%",
                  borderRadius: "4px",
                  background: "#111",
                }}
              ></span>
              <span
                style={{
                  flex: "1",
                  height: "65%",
                  borderRadius: "4px",
                  background: "#BBF7D0",
                }}
              ></span>
              <span
                style={{
                  flex: "1",
                  height: "92%",
                  borderRadius: "4px",
                  background: "#111",
                }}
              ></span>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "20px",
            paddingTop: "16px",
            borderTop: "1px solid rgba(17,17,17,.12)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              margin: "0",
              fontSize: "19px",
              fontWeight: "600",
              letterSpacing: "-0.01em",
            }}
          >
            [Project name]
          </h3>
          <span aria-hidden="true">→</span>
        </div>
        <p className="muted" style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.6" }}>
          [Two lines on the problem, what we built and the result it delivered.]
        </p>
        <p
          style={{
            margin: "10px 0 0",
            fontSize: "13px",
            color: "rgba(17,17,17,.5)",
          }}
        >
          Dashboard · Internal tool
        </p>
      </Link>
    </>
  );
}
