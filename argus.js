/**
 * ARGUS SYSTEM — TikTok Ultra Quality Optimizer (v2.1 Haze Engine)
 * WebAssembly FFmpeg Container Remuxer combined with
 * client-side brand patcher, HEVC/hev1 conversion, stss alignment, and sample injection.
 */

// ─── TRANSLATION DICTIONARY ─────────────────────────────────────────────────

const TRANSLATIONS = {
    en: {
        documentTitle: "ARGUS | TikTok Quality Optimizer",
        "hero-tag": "OPTIMIZATION_PROTOCOL // ARGUS_V2.1_HAZE_ENGINE",
        "hero-title": 'TikTok Quality <span class="accent-text italic">Optimizer.</span>',
        "hero-desc": "Binary AST pipeline v2.1 — FFmpeg faststart remux + HEVC/hvc1 tag patch + fake sample injection. Zero re-encoding, maximum quality bypass.",
        "method-title": "ARGUS PROTOCOL BYPASS",
        "method-desc": "Full binary AST patcher — restructures MP4 container via FFmpeg faststart, normalizes HEVC/H.264 codecs, injects fake video samples into chunk tables, and shifts all offsets to bypass platform compression.",
        "preset-label": "Video Preset:",
        "opt-vertical": "Vertical (9:16)",
        "opt-square": "Square (1:1)",
        "opt-landscape": "Landscape (16:9)",
        "method-recommend": "Recommended: 1080p+ · H.264 / HEVC",
        "warning-title": "AST BINARY PATCHER PROTOCOL",
        "warning-desc": 'This method uses the full Argus AST engine v2.1. It normalizes codec headers, injects fake video samples into sample tables, and shifts all chunk offsets so TikTok treats your file as optimized.',
        "drop-title": "Select or drag file to optimize",
        "drop-subtitle": "Argus Container Optimization · Zero Re-encoding",
        "progress-indicator-text": "SYSTEM_OPTIMIZING...",
        "terminal-title": "LOG_CONSOLE",
        "terminal-welcome": "> Awaiting media payload injection...",
        "status-standby": "Standby",
        "status-optimizing": "Optimizing",
        "status-ready": "Ready",
        "download-success-title": "> INJECTION COMPLETED SUCCESSFULLY",
        "btn-save": "Save Video",
        "btn-reset": "Optimize Another",
        "auto-detect-badge": "AUTO_DETECT",
        
        // Dynamic Terminal Logs
        logInit: "Initializing Argus Method: ",
        logApply: "Starting Argus AST Pipeline (v2.1 Haze Engine)...",
        logMode: "AST: Mode -> FFmpeg Faststart + Binary Chunk Shifting",
        logRead: "Reading binary stream...",
        logWasmLoad: "WASM: Loading FFmpeg Core Engine...",
        logWasmReady: "✓ FFmpeg Engine Ready",
        logWasmWrite: "WASM: Writing input file...",
        logWasmExec: "WASM: Executing FFmpeg Faststart Container Restructure...",
        logAstRead: "AST: Reading container...",
        logAstInit: "AST: Initiating Argus Patcher...",
        logAstFake: "AST: Calculated fake samples: ",
        logComplete: "✓ AST Injection complete ",
        logReady: "Ready to Post ✓",
        logAwaiting: "System ready. Awaiting user action.",
        logFailed: "Optimization Failed.",
        logError: "Fatal Error: "
    },
    ar: {
        documentTitle: "آرغوس | نظام تحسين جودة تيك توك",
        "hero-tag": "بروتوكول التحسين // نظام_آرغوس_V2.1_HAZE",
        "hero-title": 'مُحسِّن جودة <span class="accent-text italic">تيك توك.</span>',
        "hero-desc": "خط معالجة AST ثنائي — إعادة هيكلة الحاوية السريعة FFmpeg + حقن عينات وهمية + إزاحة فهارس الفيديو. بدون إعادة ترميز، وتجاوز قيود الضغط.",
        "method-title": "تجاوز بروتوكول آرغوس",
        "method-desc": "مُرقع البيانات الهيكلية ثنائية الأبعاد بالكامل — يُعيد هيكلة حاوية MP4 بواسطة FFmpeg، ويحقن عينات فيديو وهمية في جداول البيانات، ويُزيح فهارس الملف لتفادي ضغط المنصة.",
        "preset-label": "أبعاد الفيديو:",
        "opt-vertical": "عمودي (9:16)",
        "opt-square": "مربع (1:1)",
        "opt-landscape": "أفقي (16:9)",
        "method-recommend": "موصى به: 1080p+ · H.264 / HEVC",
        "warning-title": "بروتوكول مرقع ثنائي AST",
        "warning-desc": 'تستخدم هذه الطريقة محرك معالجة آرغوس AST بالكامل. حيث يقوم بحقن عينات فيديو وهمية في جداول عينات ملف الـ MP4 وإزاحة جميع مسافات أجزاء الفيديو، مما يجعل خادم المنصة يتعامل مع ملفك على أنه مُحسن مسبقًا.',
        "drop-title": "اختر ملف فيديو أو اسحبه هنا لتحسينه",
        "drop-subtitle": "تحسين حاوية آرغوس · بدون إعادة ترميز الفيديوهات",
        "progress-indicator-text": "جاري تحسين الفيديو...",
        "terminal-title": "وحدة التحكم والتقارير",
        "terminal-welcome": "> في انتظار إدخال ملف الفيديو للبدء...",
        "status-standby": "في الانتظار",
        "status-optimizing": "جاري التحسين",
        "status-ready": "مستعد",
        "download-success-title": "> اكتملت عملية الحقن والتحسين بنجاح",
        "btn-save": "حفظ الفيديو المعالج",
        "btn-reset": "تحسين فيديو آخر",
        "auto-detect-badge": "كشف تلقائي",
        
        // Dynamic Terminal Logs
        logInit: "بدء تهيئة بروتوكول آرغوس: ",
        logApply: "بدء تشغيل خط معالجة آرغوس AST (إصدار Haze Engine v2.1)...",
        logMode: "AST: النمط -> هيكلة FFmpeg سريعة البدء + إزاحة فهارس الفيديو",
        logRead: "جاري قراءة البيانات الثنائية للملف...",
        logWasmLoad: "WASM: جاري تحميل محرك معالجة FFmpeg Core...",
        logWasmReady: "✓ محرك معالجة FFmpeg جاهز",
        logWasmWrite: "WASM: كتابة ملف الفيديو المؤقت...",
        logWasmExec: "WASM: إعادة هيكلة حاوية الفيديو (Faststart)...",
        logAstRead: "AST: قراءة بنية حاوية الملف المولد...",
        logAstInit: "AST: بدء تطبيق خوارزمية الترقيع AST...",
        logAstFake: "AST: حساب عدد العينات الوهمية المحقونة: ",
        logComplete: "✓ اكتملت عملية الحقن والتحسين في غضون ",
        logReady: "جاهز للنشر الآن ✓",
        logAwaiting: "النظام مستعد. في انتظار تحميل الملف.",
        logFailed: "فشلت عملية التحسين.",
        logError: "خطأ فادح: "
    }
};

let currentLang = 'en';

// ─── LANGUAGE TOGGLE LOGIC ──────────────────────────────────────────────────

function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    localStorage.setItem('argus_lang', lang);

    // Update html attributes
    const htmlEl = document.documentElement;
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Toggle active state on buttons
    const btnEn = document.getElementById('lang-en');
    const btnAr = document.getElementById('lang-ar');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    if (btnAr) btnAr.classList.toggle('active', lang === 'ar');

    // Update static elements
    const dict = TRANSLATIONS[lang];
    document.title = dict.documentTitle;

    for (const [key, value] of Object.entries(dict)) {
        const el = document.getElementById(key);
        if (el) {
            if (key === 'hero-title' || key === 'warning-desc') {
                el.innerHTML = value; // Preserve internal tags
            } else {
                el.textContent = value;
            }
        }
    }

    // Update dynamic terminal text if on standby
    const welcomeLog = document.getElementById('terminal-welcome');
    if (welcomeLog) {
        welcomeLog.textContent = dict['terminal-welcome'];
    }

    const statusIndicator = document.getElementById('status-text');
    if (statusIndicator && !argusIsProcessing) {
        statusIndicator.textContent = dict['status-standby'];
    }
}

// ─── BINARY STREAM HELPERS ──────────────────────────────────────────────────

const FAKE_SAMPLE = new Uint8Array([0,0,0,4, 0,0,0,0]);
const CONTAINERS = new Set(['moov','trak','mdia','minf','dinf','edts','stbl','udta','meta','ilst']);

function u32(u8, off) {
  return (u8[off]<<24) | (u8[off+1]<<16) | (u8[off+2]<<8) | u8[off+3];
}
function u64(u8, off) {
  const hi = u32(u8, off);
  const lo = u32(u8, off+4);
  return Number((BigInt(hi)<<32n) | BigInt(lo));
}
function w32(val) {
  const b = new Uint8Array(4);
  b[0] = (val>>>24)&0xFF; b[1] = (val>>>16)&0xFF;
  b[2] = (val>>>8)&0xFF;  b[3] = val&0xFF;
  return b;
}
function w64(val) {
  const b = new Uint8Array(8);
  const v = BigInt(val);
  const hi = Number(v >> 32n);
  const lo = Number(v & 0xFFFFFFFFn);
  b.set(w32(hi), 0);
  b.set(w32(lo), 4);
  return b;
}

function astBox(type, content) {
  const out = new Uint8Array(content.length + 8);
  out.set(w32(content.length + 8), 0);
  for (let i = 0; i < 4; i++) out[i+4] = type.charCodeAt(i);
  out.set(content, 8);
  return out;
}

function boxType(u8, off) {
  return String.fromCharCode(u8[off+4], u8[off+5], u8[off+6], u8[off+7]);
}

function parseBoxes(u8, start, end) {
  const boxes = [];
  let p = start;
  while (p + 8 <= end) {
    let size = u32(u8, p);
    let header = 8;
    if (size === 1) {
      if (p + 16 > end) break;
      size = u64(u8, p + 8);
      header = 16;
    } else if (size === 0) {
      size = end - p;
    }
    if (!size || p + size > end) break;

    const type = boxType(u8, p);
    const b = { type, start: p, end: p + size, size, header, children: null };

    let cstart = p + header;
    if (type === 'meta') cstart += 4;

    if (CONTAINERS.has(type) && cstart < p + size) {
      b.children = parseBoxes(u8, cstart, p + size);
    }
    boxes.push(b);
    p += size;
  }
  return boxes;
}

function raw(u8, b) { return u8.subarray(b.start, b.end); }
function payload(u8, b) { return u8.subarray(b.start + b.header, b.end); }

function findChild(b, type) {
  if (!b.children) return null;
  for (let i=0; i<b.children.length; i++) {
    if (b.children[i].type === type) return b.children[i];
  }
  return null;
}
function childPath(b, path) {
  let c = b;
  for (const t of path) {
    c = findChild(c, t);
    if (!c) return null;
  }
  return c;
}

function isVideoTrak(u8, trak) {
  const hdlr = childPath(trak, ['mdia', 'hdlr']);
  if (!hdlr) return false;
  const p = payload(u8, hdlr);
  const type = String.fromCharCode(p[8], p[9], p[10], p[11]);
  return type === 'vide';
}

function findStbl(trak) {
  return childPath(trak, ['mdia', 'minf', 'stbl']);
}

function stszInfo(u8, stsz) {
  const p = payload(u8, stsz);
  return { sampleSize: u32(p, 4), count: u32(p, 8) };
}

function concatBuffers(bufs) {
  let total = 0;
  for (const b of bufs) total += b.length;
  const out = new Uint8Array(total);
  let off = 0;
  for (const b of bufs) {
    out.set(b, off);
    off += b.length;
  }
  return out;
}

function patchMdhdLang(u8, mdhd) {
  const p = payload(u8, mdhd);
  const out = new Uint8Array(p.length);
  out.set(p);
  const ver = out[0];
  const off = ver === 1 ? 28 : 16;
  if (off + 2 <= out.length) {
    out[off] = (0x55c4 >> 8) & 0xFF;
    out[off+1] = 0x55c4 & 0xFF;
  }
  return astBox('mdhd', out);
}

function patchHdlrName(u8, hdlr) {
  const p = payload(u8, hdlr);
  let name = "";
  if (p.length >= 12) {
    name = String.fromCharCode(p[8], p[9], p[10], p[11]);
  }
  const newName = name === 'vide' ? 'VideoHandler' : (name === 'soun' ? 'SoundHandler' : null);
  if (!newName) return raw(u8, hdlr);

  const out = new Uint8Array(24 + newName.length + 1);
  out.set(p.subarray(0, 24), 0);
  for(let i=0; i<newName.length; i++) out[24+i] = newName.charCodeAt(i);
  out[24+newName.length] = 0;
  return astBox('hdlr', out);
}

function patchStsz(u8, stsz, fakeSamples) {
  if (fakeSamples < 1) return raw(u8, stsz);
  const p = payload(u8, stsz);
  const verFlags = p.subarray(0, 4);
  const defaultSize = u32(p, 4);
  const count = u32(p, 8);
  const sizes = [];

  if (defaultSize !== 0) {
    for (let i=0; i<count; i++) sizes.push(defaultSize);
  } else {
    for (let i=0, off=12; i<count && off+4<=p.length; i++, off+=4) {
      sizes.push(u32(p, off));
    }
  }

  for (let i=0; i<fakeSamples; i++) sizes.push(8);

  const out = new Uint8Array(12 + sizes.length * 4);
  out.set(verFlags, 0);
  out.set(w32(0), 4);
  out.set(w32(sizes.length), 8);
  for (let i=0; i<sizes.length; i++) {
    out.set(w32(sizes[i]), 12 + i * 4);
  }
  return astBox('stsz', out);
}

function patchStsc(u8, stsc, chunkCount) {
  if (chunkCount < 1) return raw(u8, stsc);
  const p = payload(u8, stsc);
  const verFlags = p.subarray(0, 4);
  const count = u32(p, 4);
  const entries = [];
  
  for (let i=0, off=8; i<count && off+12<=p.length; i++, off+=12) {
    entries.push([u32(p, off), u32(p, off+4), u32(p, off+8)]);
  }

  const lastId = entries.length ? entries[entries.length-1][2] : 1;
  entries.push([chunkCount + 1, 1, lastId]);

  const out = new Uint8Array(8 + entries.length * 12);
  out.set(verFlags, 0);
  out.set(w32(entries.length), 4);
  for (let i=0; i<entries.length; i++) {
    out.set(w32(entries[i][0]), 8 + i * 12);
    out.set(w32(entries[i][1]), 12 + i * 12);
    out.set(w32(entries[i][2]), 16 + i * 12);
  }
  return astBox('stsc', out);
}

function patchStco(u8, stco, moovDiff, fakeOffset, fakeSamples) {
  const p = payload(u8, stco);
  const verFlags = p.subarray(0, 4);
  const count = u32(p, 4);
  const offsets = [];

  for (let i=0, off=8; i<count && off+4<=p.length; i++, off+=4) {
    offsets.push(u32(p, off) + moovDiff);
  }
  for (let i=0; i<fakeSamples; i++) {
    offsets.push(fakeOffset);
  }

  const out = new Uint8Array(8 + offsets.length * 4);
  out.set(verFlags, 0);
  out.set(w32(offsets.length), 4);
  for (let i=0; i<offsets.length; i++) {
    out.set(w32(offsets[i]), 8 + i * 4);
  }
  return astBox('stco', out);
}

function patchCo64(u8, co64, moovDiff, fakeOffset, fakeSamples) {
  const p = payload(u8, co64);
  const verFlags = p.subarray(0, 4);
  const count = u32(p, 4);
  const offsets = [];

  for (let i=0, off=8; i<count && off+8<=p.length; i++, off+=8) {
    offsets.push(u64(p, off) + moovDiff);
  }
  for (let i=0; i<fakeSamples; i++) {
    offsets.push(fakeOffset);
  }

  const out = new Uint8Array(8 + offsets.length * 8);
  out.set(verFlags, 0);
  out.set(w32(offsets.length), 4);
  for (let i=0; i<offsets.length; i++) {
    out.set(w64(offsets[i]), 8 + i * 8);
  }
  return astBox('co64', out);
}

function patchSttsTrailingDelta(u8, stts) {
  const p = payload(u8, stts);
  const verFlags = p.subarray(0, 4);
  const entryCount = u32(p, 4);
  if (entryCount === 0) return raw(u8, stts);
  
  const entries = [];
  for (let i = 0, off = 8; i < entryCount && off + 8 <= p.length; i++, off += 8) {
    entries.push([u32(p, off), u32(p, off + 4)]);
  }
  
  const lastEntry = entries.pop();
  if (lastEntry[0] > 1) {
    entries.push([lastEntry[0] - 1, lastEntry[1]]);
    entries.push([1, 1]);
  } else {
    entries.push([1, 1]);
  }
  
  const out = new Uint8Array(8 + entries.length * 8);
  out.set(verFlags, 0);
  out.set(w32(entries.length), 4);
  for (let i = 0; i < entries.length; i++) {
    out.set(w32(entries[i][0]), 8 + i * 8);
    out.set(w32(entries[i][1]), 12 + i * 8);
  }
  return astBox('stts', out);
}

function patchStsdHevcTag(u8, stsd) {
  const p = payload(u8, stsd);
  if (p.length < 16) return raw(u8, stsd);
  const entryType = String.fromCharCode(p[12], p[13], p[14], p[15]);
  if (entryType === 'hev1') {
    const newP = new Uint8Array(p);
    newP[13] = 0x76; // 'v' -> 'hvc1'
    newP[14] = 0x63; // 'c'
    return astBox('stsd', newP);
  }
  return raw(u8, stsd);
}

// ─── FFMEPG WASM INSTANTIATOR ───────────────────────────────────────────────

let ffmpegInstance = null;
let ffmpegLoadPromise = null;

async function loadFFmpegInstance() {
    if (ffmpegInstance) return ffmpegInstance;
    if (ffmpegLoadPromise) return ffmpegLoadPromise;
    
    const dict = TRANSLATIONS[currentLang];
    
    ffmpegLoadPromise = (async () => {
        try {
            logToTerminal(dict.logWasmLoad, 'normal');
            const { FFmpeg } = FFmpegWASM;
            const instance = new FFmpeg();
            instance.on('log', ({ message }) => {
                if (message.includes('frame=') || message.includes('size=')) return;
                console.log('[ArgusCore]', message);
            });
            
            await instance.load({
                coreURL: 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.js',
                wasmURL: 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.wasm'
            });
            logToTerminal(dict.logWasmReady, 'success');
            ffmpegInstance = instance;
            return instance;
        } catch (err) {
            logToTerminal(dict.logError + (err.message || err), 'error');
            ffmpegLoadPromise = null;
            throw err;
        }
    })();
    return ffmpegLoadPromise;
}

// ─── CORE AST PIPELINE PATCH ENGINE ──────────────────────────────────────────

async function argusOptimizeVideo(arrayBuffer, onProgress) {
    const dict = TRANSLATIONS[currentLang];
    const start = Date.now();
    
    logToTerminal(dict.logRead);
    onProgress(15);
    
    logToTerminal(dict.logWasmLoad);
    const ffmpeg = await loadFFmpegInstance();
    onProgress(30);
    
    logToTerminal(dict.logWasmWrite);
    const inputU8 = new Uint8Array(arrayBuffer);
    await ffmpeg.writeFile('input.mp4', inputU8);
    onProgress(45);
    
    logToTerminal(dict.logWasmExec, 'highlight');
    await ffmpeg.exec([
      '-y', '-v', 'warning',
      '-i', 'input.mp4',
      '-f', 'mp4',
      '-c', 'copy',
      '-map_metadata', '-1',
      '-map_chapters', '-1',
      '-map', '0',
      '-movflags', '+faststart',
      '-write_tmcd', '0',
      '-metadata', 'handler_name=VideoHandler',
      'temp.mp4'
    ]);
    onProgress(70);
    
    logToTerminal(dict.logAstRead);
    const tempBuffer = await ffmpeg.readFile('temp.mp4');
    onProgress(80);
    
    try {
        await ffmpeg.deleteFile('input.mp4');
        await ffmpeg.deleteFile('temp.mp4');
    } catch (_) {}
    
    logToTerminal(dict.logAstInit, 'highlight');
    let u8 = tempBuffer;
    const boxes = parseBoxes(u8, 0, u8.length);
    
    const moovBox = boxes.find(b => b.type === 'moov');
    const mdatBox = boxes.find(b => b.type === 'mdat');
    
    if (!moovBox || !mdatBox) {
        throw new Error(currentLang === 'ar' ? 'حاوية MP4 غير صالحة: مفقود بيانات moov أو mdat' : 'Invalid MP4: Missing moov or mdat');
    }
    if (mdatBox.header !== 8) {
        throw new Error(currentLang === 'ar' ? 'حاوية mdat غير مدعومة' : 'Unsupported large mdat box header');
    }
    
    const trakBoxes = (moovBox.children || []).filter(b => b.type === 'trak');
    const videoTrak = trakBoxes.find(b => isVideoTrak(u8, b));
    if (!videoTrak) {
        throw new Error(currentLang === 'ar' ? 'لم يتم العثور على مسار الفيديو' : 'No video trak found');
    }
    
    const stbl = findStbl(videoTrak);
    if (!stbl) {
        throw new Error(currentLang === 'ar' ? 'لم يتم العثور على جدول العينات stbl' : 'stbl box not found');
    }
    
    const stszBox = findChild(stbl, 'stsz');
    const stscBox = findChild(stbl, 'stsc');
    const stcoBox = findChild(stbl, 'stco') || findChild(stbl, 'co64');
    
    if (!stszBox || !stscBox || !stcoBox) {
        throw new Error(currentLang === 'ar' ? 'الملفات الهيكلية stsz أو stsc أو stco مفقودة' : 'stsz, stsc, or stco/co64 missing');
    }
    
    const info = stszInfo(u8, stszBox);
    const targetCount = Math.floor(info.count * 20 / 3);
    const fakeSamples = Math.max(0, targetCount - info.count);
    const originalChunkCount = u32(payload(u8, stcoBox), 4);
    
    logToTerminal(dict.logAstFake + `${fakeSamples}`, 'success');
    
    let activeTrak = null;
    
    function processBox(b, moovDiff, fakeOffset, fakeSamplesCount) {
      if (b.type === 'free' || b.type === 'udta' || b.type === 'uuid') return null;
      if (b.type === 'mdhd') return patchMdhdLang(u8, b);
      if (b.type === 'hdlr') return patchHdlrName(u8, b);
      
      const isVideo = activeTrak === videoTrak;
      
      if (isVideo && b.type === 'stsd') return patchStsdHevcTag(u8, b);
      if (isVideo && b.type === 'stsz') return patchStsz(u8, b, fakeSamplesCount);
      if (isVideo && b.type === 'stts') return patchSttsTrailingDelta(u8, b);
      if (isVideo && b.type === 'stsc' && fakeSamplesCount > 0) return patchStsc(u8, b, originalChunkCount);
      
      if (b.type === 'stco') return patchStco(u8, b, moovDiff, fakeOffset, fakeSamplesCount);
      if (b.type === 'co64') return patchCo64(u8, b, moovDiff, fakeOffset, fakeSamplesCount);
      
      if (b.children) {
        const chunks = [];
        if (b.type === 'meta') chunks.push(payload(u8, b).subarray(0, 4));
        for (const child of b.children) {
          const oldTrak = activeTrak;
          if (child.type === 'trak') activeTrak = child;
          const patched = processBox(child, moovDiff, fakeOffset, fakeSamplesCount);
          activeTrak = oldTrak;
          if (patched) chunks.push(patched);
        }
        return astBox(b.type, concatBuffers(chunks));
      }
      return raw(u8, b);
    }
    
    function recomputeMoov(moovDiff, fakeOffset, fakeSamplesCount) {
      activeTrak = null;
      return processBox(moovBox, moovDiff, fakeOffset, fakeSamplesCount);
    }
    
    let currentMoov = recomputeMoov(0, 0, fakeSamples);
    let moovDiff = currentMoov.length - raw(u8, moovBox).length;
    
    let fakeOffset = mdatBox.end + moovDiff;
    currentMoov = recomputeMoov(moovDiff, fakeOffset, fakeSamples);
    
    moovDiff = currentMoov.length - raw(u8, moovBox).length;
    const freeBox = astBox('free', new Uint8Array(0));
    
    let newMdatOffset = 0;
    for (const b of boxes) {
      if (b.type === 'mdat') break;
      if (b.type === 'ftyp') newMdatOffset += raw(u8, b).length + 8;
      else if (b.type === 'moov') {
        const tempMoov = recomputeMoov(0, mdatBox.end, fakeSamples);
        newMdatOffset += tempMoov.length;
      }
      else if (b.type !== 'free' && b.type !== 'skip' && b.type !== 'uuid') newMdatOffset += raw(u8, b).length;
    }
    
    const trueMoovDiff = newMdatOffset - mdatBox.start;
    fakeOffset = mdatBox.end + trueMoovDiff;
    
    currentMoov = recomputeMoov(trueMoovDiff, fakeOffset, fakeSamples);
    
    let outChunks = [];
    const mdatContent = raw(u8, mdatBox);
    const mdatWithFake = fakeSamples > 0 
      ? concatBuffers([
          w32(mdatContent.length + FAKE_SAMPLE.length),
          new Uint8Array([0x6d, 0x64, 0x61, 0x74]),
          mdatContent.subarray(8),
          FAKE_SAMPLE
        ])
      : mdatContent;
      
    for (const b of boxes) {
      if (b.type === 'ftyp') {
        outChunks.push(raw(u8, b));
        outChunks.push(freeBox);
      } else if (b.type === 'moov') {
        outChunks.push(currentMoov);
      } else if (b.type === 'mdat') {
        outChunks.push(mdatWithFake);
      } else if (b.type !== 'free' && b.type !== 'skip' && b.type !== 'uuid') {
        outChunks.push(raw(u8, b));
      }
    }
    
    const finalBuffer = concatBuffers(outChunks);
    
    u8 = null;
    outChunks = null;
    
    onProgress(95);
    
    const elapsed = ((Date.now() - start) / 1000).toFixed(1);
    const sizeMB = (finalBuffer.length / 1048576).toFixed(1);
    
    logToTerminal(dict.logComplete + `(${elapsed}s) — ${sizeMB} MB`, 'success');
    
    return { success: true, buffer: finalBuffer.buffer };
}

// ─── TERMINAL VIEW ENGINE ───────────────────────────────────────────────────

let argusIsProcessing = false;

const logToTerminal = (msg, styleType = 'normal') => {
    const t = document.getElementById('argus-terminal');
    if (!t) return;
    
    const div = document.createElement('div');
    div.className = `font-mono text-[11px] mb-1 ${
        styleType === 'error'   ? 'text-danger' :
        styleType === 'warning' ? 'text-warning' :
        styleType === 'success' ? 'text-cyan' : 'text-[#71717A]'
    }`;
    div.textContent = `> ${msg}`;
    t.appendChild(div);
    t.scrollTop = t.scrollHeight;
};

const setProgressStatus = (pct) => {
    const bar = document.getElementById('argus-progress-bar');
    const label = document.getElementById('argus-progress-label');
    if (bar) bar.style.width = `${pct}%`;
    if (label) label.textContent = `${Math.round(pct)}%`;
};

// ─── FILE HANDLER ────────────────────────────────────────────────────────────

async function processUploadedFile(file) {
    if (!file || argusIsProcessing) return;
    argusIsProcessing = true;

    const dict = TRANSLATIONS[currentLang];
    const progressContainer = document.getElementById('argus-progress-container');
    const statusIndicator = document.getElementById('argus-status-indicator');
    const statusText = document.getElementById('status-text');
    const dropZone = document.getElementById('argus-drop-zone');
    const downloadContainer = document.getElementById('argus-download-container');

    if (progressContainer) progressContainer.classList.remove('hidden');
    if (downloadContainer) downloadContainer.classList.add('hidden');
    if (dropZone) dropZone.classList.add('opacity-50', 'pointer-events-none');
    
    if (statusIndicator && statusText) {
        statusIndicator.querySelector('span').className = 'w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping';
        statusText.textContent = dict['status-optimizing'];
        statusText.className = 'font-mono text-[8px] text-[#00F0FF] uppercase tracking-widest';
    }

    setProgressStatus(5);
    const term = document.getElementById('argus-terminal');
    if (term) term.innerHTML = '';
    
    logToTerminal(`${dict.logInit}${file.name}`, 'success');

    let detectedPreset = 'vertical';
    let videoWidth = 0;
    let videoHeight = 0;
    
    try {
        logToTerminal(currentLang === 'ar' ? 'تحليل أبعاد مصفوفة الفيديو...' : 'Analyzing video dimension matrix...', 'normal');
        
        const tempVideo = document.createElement('video');
        tempVideo.preload = 'metadata';
        tempVideo.src = URL.createObjectURL(file);
        
        await new Promise((resolve) => {
            tempVideo.onloadedmetadata = () => {
                URL.revokeObjectURL(tempVideo.src);
                videoWidth = tempVideo.videoWidth;
                videoHeight = tempVideo.videoHeight;
                
                if (Math.abs(videoWidth - videoHeight) < (Math.max(videoWidth, videoHeight) * 0.05)) {
                    detectedPreset = 'square';
                } else if (videoWidth > videoHeight) {
                    detectedPreset = 'landscape';
                } else {
                    detectedPreset = 'vertical';
                }
                
                const presetEl = document.getElementById('video-preset');
                if (presetEl) {
                    presetEl.value = detectedPreset;
                }
                
                resolve();
            };
            
            tempVideo.onerror = () => {
                resolve();
            };
            
            setTimeout(resolve, 1200);
        });
        
        if (videoWidth > 0 && videoHeight > 0) {
            const presetText = detectedPreset === 'vertical' 
                ? (currentLang === 'ar' ? 'عمودي (9:16)' : 'VERTICAL (9:16)')
                : detectedPreset === 'square'
                ? (currentLang === 'ar' ? 'مربع (1:1)' : 'SQUARE (1:1)')
                : (currentLang === 'ar' ? 'أفقي (16:9)' : 'LANDSCAPE (16:9)');
                
            const dimMsg = currentLang === 'ar'
                ? `✓ تم الكشف عن أبعاد الفيديو: ${videoWidth}x${videoHeight} [النمط تلقائياً: ${presetText}]`
                : `✓ Detected dimensions: ${videoWidth}x${videoHeight} [Auto preset: ${presetText}]`;
                
            logToTerminal(dimMsg, 'success');
        }
    } catch (e) {
        console.warn("Dimension reading failed", e);
    }

    try {
        await new Promise(resolve => setTimeout(resolve, 500));
        let buf = await file.arrayBuffer();
        
        logToTerminal(dict.logApply, 'highlight');
        logToTerminal(dict.logMode, 'success');
        
        const result = await argusOptimizeVideo(buf, (pct) => {
            setProgressStatus(pct);
        });

        if (result.success) {
            setProgressStatus(100);
            
            const optimizedBlob = new Blob([result.buffer], { type: 'video/mp4' });
            const outputName = file.name.replace(/\.[^/.]+$/, '') + '_argus.mp4';
            const outputUrl = URL.createObjectURL(optimizedBlob);
            
            const downloadBtn = document.getElementById('argus-download-btn');
            if (downloadContainer && downloadBtn) {
                downloadBtn.href = outputUrl;
                downloadBtn.download = outputName;
                downloadContainer.classList.remove('hidden');
                setTimeout(() => {
                    downloadContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }

            logToTerminal(dict.logReady, 'success');
            logToTerminal(dict.logAwaiting, 'normal');

        } else {
            logToTerminal(dict.logFailed, 'error');
        }

    } catch (e) {
        logToTerminal(`${dict.logError}${e.message}`, 'error');
    } finally {
        if (statusIndicator && statusText) {
            statusIndicator.querySelector('span').className = 'w-1.5 h-1.5 rounded-full bg-[#00F0FF]';
            statusText.textContent = dict['status-ready'];
            statusText.className = 'font-mono text-[8px] text-[#00F0FF] uppercase tracking-widest';
        }
        if (dropZone) dropZone.classList.remove('opacity-50', 'pointer-events-none');
        argusIsProcessing = false;
    }
}

// ─── INITIALIZATION ──────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('argus_lang') || 'en';
    setLanguage(savedLang);

    const dropZone = document.getElementById('argus-drop-zone');
    const fileInput = document.getElementById('argus-file-input');
    const resetBtn = document.getElementById('argus-reset-btn');

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            location.reload();
        });
    }

    if (dropZone && fileInput) {
        dropZone.addEventListener('click', () => fileInput.click());
        
        fileInput.addEventListener('change', e => {
            if (e.target.files?.[0]) processUploadedFile(e.target.files[0]);
        });
        
        dropZone.addEventListener('dragover', e => {
            e.preventDefault();
            dropZone.classList.add('border-accent');
        });
        
        dropZone.addEventListener('dragleave', () => {
            dropZone.classList.remove('border-accent');
        });
        
        dropZone.addEventListener('drop', e => {
            e.preventDefault();
            dropZone.classList.remove('border-accent');
            if (e.dataTransfer?.files?.[0]) processUploadedFile(e.dataTransfer.files[0]);
        });
    }

    // Silent background preload to fix iOS Safari hang and improve speed
    loadFFmpegInstance().catch(e => console.error("Preload failed", e));
});
