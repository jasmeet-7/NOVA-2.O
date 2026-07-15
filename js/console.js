/* ==========================
   NOVA VOICE INTERFACE
========================== */

.nova-interface{
    width:100%;
    min-height:100vh;

    display:flex;
    flex-direction:column;

    align-items:center;

    padding:30px 20px;
}

.nova-header{
    width:100%;
    max-width:1000px;

    display:flex;
    justify-content:space-between;
    align-items:center;
}

.nova-brand{
    font-family:'Orbitron',sans-serif;
    font-size:24px;
    letter-spacing:4px;

    display:flex;
    align-items:center;
    gap:10px;
}

.brand-line{
    width:8px;
    height:8px;

    background:#67e8f9;
    border-radius:50%;

    box-shadow:0 0 15px #67e8f9;
}

.system-status{
    display:flex;
    align-items:center;
    gap:8px;

    color:#67e8f9;
    font-size:13px;
    letter-spacing:1px;
}

.nova-core{
    width:100%;
    max-width:700px;

    margin:auto;

    text-align:center;
}

.nova-core h1{
    font-family:'Orbitron',sans-serif;
    font-size:72px;
    color:#67e8f9;
    letter-spacing:8px;
}

.nova-core h2{
    margin-top:15px;
}

#novaStatus{
    margin:25px 0;
    color:#d1d5db;
}

#voiceButton{
    width:100px !important;
    height:100px !important;

    border:none;
    border-radius:50%;

    cursor:pointer;

    color:white;
    font-size:14px;
    font-weight:600;

    background:linear-gradient(135deg,#06b6d4,#2563eb);

    box-shadow:0 0 30px rgba(56,189,248,.4);

    transition:.3s;
}

#voiceButton:hover{
    transform:scale(1.05);
    box-shadow:0 0 50px #38bdf8;
}

.voice-hint{
    margin-top:20px;
    color:#9ca3af;
}

.command-display{
    width:100%;
    max-width:700px;

    padding:20px;

    text-align:center;

    background:rgba(255,255,255,.06);
    border:1px solid rgba(255,255,255,.12);

    border-radius:16px;
}

.display-label{
    font-size:12px;
    letter-spacing:2px;
    color:#67e8f9;
}

#lastCommand{
    margin-top:10px;
    color:#d1d5db;
}

.nova-footer{
    width:100%;
    max-width:1000px;

    display:flex;
    justify-content:space-between;

    margin-top:30px;

    font-size:11px;
    letter-spacing:2px;
    color:#6b7280;
}
