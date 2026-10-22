// Decorative product mockups under the Home hero. Markup mirrors the design
// exactly; on phones the whole panel is scaled down (see .hv-main in home.css).
export function HeroMockup() {
  return (
    <div className="wrap hv-wrap" style={{ position: "relative", marginTop: "72px" }}>
      <div
        className="hv-main"
        role="img"
        aria-label="Product mockups: a bookings dashboard, a mobile booking app, a WhatsApp agent chat and a project tracker showing the build moving to launch"
        style={{
          position: "relative",
          height: "560px",
          borderRadius: "24px 24px 0 0",
          overflow: "hidden",
          background:
            "radial-gradient(700px 320px at 50% 115%,rgba(74,222,128,.32),transparent 70%),#0B0B0B",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "0",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        ></div>
        {/* browser */}
        <div
          style={{
            position: "absolute",
            left: "8%",
            top: "64px",
            width: "56%",
            height: "540px",
            borderRadius: "14px",
            background: "#fff",
            overflow: "hidden",
            boxShadow: "0 30px 80px rgba(0,0,0,.45)",
          }}
        >
          <div
            style={{
              height: "40px",
              background: "#F4F5F2",
              display: "flex",
              alignItems: "center",
              gap: "7px",
              padding: "0 14px",
              borderBottom: "1px solid #E7E9E4",
            }}
          >
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "999px",
                background: "#FF6159",
              }}
            ></span>
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "999px",
                background: "#FFBD2E",
              }}
            ></span>
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "999px",
                background: "#28C840",
              }}
            ></span>
            <span
              style={{
                marginLeft: "14px",
                height: "22px",
                flex: "0 1 260px",
                borderRadius: "999px",
                background: "#fff",
                border: "1px solid #E2E5DF",
                fontSize: "11px",
                color: "#6B726C",
                display: "flex",
                alignItems: "center",
                padding: "0 10px",
              }}
            >
              app.yourbusiness.com/bookings
            </span>
          </div>
          <div style={{ display: "flex", height: "100%" }}>
            <div
              style={{
                width: "150px",
                flex: "none",
                background: "#F3FAF4",
                padding: "16px 12px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                fontSize: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "6px",
                    background: "#111",
                  }}
                ></span>
                Studio
              </div>
              <div
                style={{
                  padding: "7px 9px",
                  borderRadius: "7px",
                  background: "#4ADE80",
                  fontWeight: "600",
                }}
              >
                Bookings
              </div>
              <div style={{ padding: "7px 9px", color: "#5B635D" }}>Customers</div>
              <div style={{ padding: "7px 9px", color: "#5B635D" }}>Payments</div>
              <div style={{ padding: "7px 9px", color: "#5B635D" }}>Staff</div>
              <div style={{ padding: "7px 9px", color: "#5B635D" }}>Reports</div>
            </div>
            <div style={{ flex: "1", padding: "20px 22px", textAlign: "left" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ fontSize: "16px", fontWeight: "700" }}>Bookings overview</div>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: "600",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    background: "#111",
                    color: "#fff",
                  }}
                >
                  + New booking
                </span>
              </div>
              <div
                style={{
                  marginTop: "16px",
                  display: "grid",
                  gridTemplateColumns: "repeat(3,minmax(0,1fr))",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    border: "1px solid #E7E9E4",
                    borderRadius: "10px",
                    padding: "12px",
                  }}
                >
                  <div style={{ fontSize: "10px", color: "#6B726C" }}>Today</div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      marginTop: "4px",
                    }}
                  >
                    24
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid #E7E9E4",
                    borderRadius: "10px",
                    padding: "12px",
                  }}
                >
                  <div style={{ fontSize: "10px", color: "#6B726C" }}>This week</div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      marginTop: "4px",
                    }}
                  >
                    138
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid #E7E9E4",
                    borderRadius: "10px",
                    padding: "12px",
                    background: "#F3FAF4",
                  }}
                >
                  <div style={{ fontSize: "10px", color: "#6B726C" }}>Show-up rate</div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      marginTop: "4px",
                      color: "#15803D",
                    }}
                  >
                    94%
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "12px",
                  border: "1px solid #E7E9E4",
                  borderRadius: "10px",
                  padding: "14px",
                  height: "130px",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    flex: "1",
                    height: "38%",
                    borderRadius: "4px",
                    background: "#BBF7D0",
                  }}
                ></span>
                <span
                  style={{
                    flex: "1",
                    height: "52%",
                    borderRadius: "4px",
                    background: "#BBF7D0",
                  }}
                ></span>
                <span
                  style={{
                    flex: "1",
                    height: "45%",
                    borderRadius: "4px",
                    background: "#BBF7D0",
                  }}
                ></span>
                <span
                  style={{
                    flex: "1",
                    height: "66%",
                    borderRadius: "4px",
                    background: "#BBF7D0",
                  }}
                ></span>
                <span
                  style={{
                    flex: "1",
                    height: "58%",
                    borderRadius: "4px",
                    background: "#BBF7D0",
                  }}
                ></span>
                <span
                  style={{
                    flex: "1",
                    height: "78%",
                    borderRadius: "4px",
                    background: "#4ADE80",
                  }}
                ></span>
                <span
                  style={{
                    flex: "1",
                    height: "70%",
                    borderRadius: "4px",
                    background: "#BBF7D0",
                  }}
                ></span>
                <span
                  style={{
                    flex: "1",
                    height: "88%",
                    borderRadius: "4px",
                    background: "#4ADE80",
                  }}
                ></span>
                <span
                  style={{
                    flex: "1",
                    height: "74%",
                    borderRadius: "4px",
                    background: "#BBF7D0",
                  }}
                ></span>
                <span
                  style={{
                    flex: "1",
                    height: "96%",
                    borderRadius: "4px",
                    background: "#111",
                  }}
                ></span>
              </div>
              <div
                style={{
                  marginTop: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  fontSize: "11px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "9px 10px",
                    border: "1px solid #E7E9E4",
                    borderRadius: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "999px",
                      background: "#DCFCE7",
                    }}
                  ></span>
                  <span style={{ flex: "1", fontWeight: "600" }}>Haircut · 10:00</span>
                  <span
                    style={{
                      padding: "3px 8px",
                      borderRadius: "999px",
                      background: "#DCFCE7",
                      color: "#15803D",
                      fontWeight: "600",
                    }}
                  >
                    Paid
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "9px 10px",
                    border: "1px solid #E7E9E4",
                    borderRadius: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "999px",
                      background: "#F1F1EE",
                    }}
                  ></span>
                  <span style={{ flex: "1", fontWeight: "600" }}>Braids · 12:30</span>
                  <span
                    style={{
                      padding: "3px 8px",
                      borderRadius: "999px",
                      background: "#F1F1EE",
                      color: "#5B635D",
                      fontWeight: "600",
                    }}
                  >
                    Pending
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "9px 10px",
                    border: "1px solid #E7E9E4",
                    borderRadius: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "999px",
                      background: "#DCFCE7",
                    }}
                  ></span>
                  <span style={{ flex: "1", fontWeight: "600" }}>Nails · 15:00</span>
                  <span
                    style={{
                      padding: "3px 8px",
                      borderRadius: "999px",
                      background: "#DCFCE7",
                      color: "#15803D",
                      fontWeight: "600",
                    }}
                  >
                    Paid
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* phone */}
        <div
          className="fl2"
          style={{
            position: "absolute",
            right: "7%",
            top: "44px",
            width: "250px",
            height: "560px",
            borderRadius: "42px",
            background: "#1C1C1C",
            padding: "10px",
            boxSizing: "border-box",
            boxShadow: "0 30px 80px rgba(0,0,0,.5)",
          }}
        >
          <div
            style={{
              height: "100%",
              borderRadius: "33px",
              background: "#fff",
              overflow: "hidden",
              padding: "18px 16px",
              boxSizing: "border-box",
              textAlign: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "11px",
                fontWeight: "600",
              }}
            >
              <span>9:41</span>
              <span
                style={{
                  width: "56px",
                  height: "16px",
                  borderRadius: "999px",
                  background: "#111",
                }}
              ></span>
              <span>100%</span>
            </div>
            <div style={{ marginTop: "18px", fontSize: "12px", color: "#6B726C" }}>
              Good morning
            </div>
            <div
              style={{
                fontSize: "19px",
                fontWeight: "700",
                letterSpacing: "-0.02em",
              }}
            >
              Book your next visit
            </div>
            <div
              style={{
                marginTop: "14px",
                borderRadius: "16px",
                background: "#4ADE80",
                padding: "14px",
              }}
            >
              <div style={{ fontSize: "10px", fontWeight: "600" }}>NEXT APPOINTMENT</div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  marginTop: "4px",
                }}
              >
                Sat, 10:00 AM
              </div>
              <div style={{ fontSize: "11px", marginTop: "2px" }}>Haircut · Studio Lekki</div>
            </div>
            <div
              style={{
                marginTop: "14px",
                display: "grid",
                gridTemplateColumns: "repeat(4,minmax(0,1fr))",
                gap: "6px",
                fontSize: "10px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  padding: "8px 0",
                  borderRadius: "10px",
                  background: "#F3FAF4",
                }}
              >
                Mon
                <br />
                <b>12</b>
              </div>
              <div
                style={{
                  padding: "8px 0",
                  borderRadius: "10px",
                  background: "#111",
                  color: "#fff",
                }}
              >
                Tue
                <br />
                <b>13</b>
              </div>
              <div
                style={{
                  padding: "8px 0",
                  borderRadius: "10px",
                  background: "#F3FAF4",
                }}
              >
                Wed
                <br />
                <b>14</b>
              </div>
              <div
                style={{
                  padding: "8px 0",
                  borderRadius: "10px",
                  background: "#F3FAF4",
                }}
              >
                Thu
                <br />
                <b>15</b>
              </div>
            </div>
            <div
              style={{
                marginTop: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "7px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 12px",
                  borderRadius: "12px",
                  border: "1px solid #E7E9E4",
                  fontSize: "11px",
                }}
              >
                <b>10:00</b>
                <span style={{ color: "#15803D", fontWeight: "600" }}>Available</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 12px",
                  borderRadius: "12px",
                  border: "1px solid #E7E9E4",
                  fontSize: "11px",
                }}
              >
                <b>12:30</b>
                <span style={{ color: "#9AA19B" }}>Booked</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 12px",
                  borderRadius: "12px",
                  border: "2px solid #111",
                  fontSize: "11px",
                }}
              >
                <b>14:00</b>
                <span style={{ color: "#15803D", fontWeight: "600" }}>Selected</span>
              </div>
            </div>
            <div
              style={{
                marginTop: "14px",
                height: "42px",
                borderRadius: "999px",
                background: "#111",
                color: "#fff",
                fontSize: "13px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Confirm booking
            </div>
          </div>
        </div>
        {/* chat */}
        <div
          className="fl"
          style={{
            position: "absolute",
            left: "3%",
            bottom: "44px",
            width: "300px",
            borderRadius: "18px",
            background: "#fff",
            padding: "14px",
            boxSizing: "border-box",
            boxShadow: "0 24px 60px rgba(0,0,0,.45)",
            textAlign: "left",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              paddingBottom: "10px",
              borderBottom: "1px solid #EEF0EC",
            }}
          >
            <span
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "999px",
                background: "#111",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "4px",
                  background: "#4ADE80",
                }}
              ></span>
            </span>
            <div>
              <div style={{ fontSize: "12px", fontWeight: "700" }}>WhatsApp agent</div>
              <div
                style={{
                  fontSize: "10px",
                  color: "#15803D",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <span
                  className="pulse"
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "999px",
                    background: "#4ADE80",
                  }}
                ></span>
                online
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "10px",
              maxWidth: "80%",
              padding: "8px 11px",
              borderRadius: "12px 12px 12px 4px",
              background: "#F1F2EE",
              fontSize: "12px",
            }}
          >
            Hi, can I book a slot for Saturday?
          </div>
          <div
            style={{
              margin: "8px 0 0 auto",
              maxWidth: "80%",
              padding: "8px 11px",
              borderRadius: "12px 12px 4px 12px",
              background: "#DCFCE7",
              fontSize: "12px",
            }}
          >
            Yes! 10:00 or 14:00 are open. Want me to hold one?
          </div>
        </div>
        {/* progress */}
        <div
          className="fl3"
          style={{
            position: "absolute",
            left: "47%",
            bottom: "36px",
            width: "250px",
            borderRadius: "18px",
            background: "#fff",
            padding: "16px",
            boxSizing: "border-box",
            boxShadow: "0 24px 60px rgba(0,0,0,.45)",
            textAlign: "left",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: "12px", fontWeight: "700" }}>Project plan</div>
            <span
              style={{
                fontSize: "10px",
                fontWeight: "600",
                padding: "3px 8px",
                borderRadius: "999px",
                background: "#DCFCE7",
                color: "#15803D",
              }}
            >
              Phase 2 of 3
            </span>
          </div>
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "9px",
              fontSize: "11px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "999px",
                  background: "#4ADE80",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111"
                  strokeWidth="4"
                  aria-hidden="true"
                >
                  <path d="M5 12l5 5 9-10" />
                </svg>
              </span>
              Scope
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "999px",
                  background: "#4ADE80",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111"
                  strokeWidth="4"
                  aria-hidden="true"
                >
                  <path d="M5 12l5 5 9-10" />
                </svg>
              </span>
              Design
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                className="pulse"
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "999px",
                  border: "2px solid #4ADE80",
                  boxSizing: "border-box",
                }}
              ></span>
              <span style={{ flex: "1" }}>Build</span>
              <span
                style={{
                  width: "70px",
                  height: "6px",
                  borderRadius: "999px",
                  background: "#EEF0EC",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: "70%",
                    height: "100%",
                    background: "#111",
                  }}
                ></span>
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#9AA19B",
              }}
            >
              <span
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "999px",
                  border: "2px solid #D9DCD6",
                  boxSizing: "border-box",
                }}
              ></span>
              Launch
            </div>
          </div>
        </div>
        {/* toast */}
        <div
          className="fl"
          style={{
            position: "absolute",
            left: "50%",
            top: "24px",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "9px 14px",
            borderRadius: "999px",
            background: "#fff",
            fontSize: "12px",
            fontWeight: "600",
            boxShadow: "0 14px 40px rgba(0,0,0,.4)",
            whiteSpace: "nowrap",
          }}
        >
          <span
            className="pulse"
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "999px",
              background: "#4ADE80",
            }}
          ></span>
          Deployed to production · just now
        </div>
      </div>
    </div>
  );
}
