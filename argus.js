/**
 * ARGUS SYSTEM — TikTok Ultra Quality Optimizer (Classic v5.5 & Max v6.2 Engines)
 * 100% client-side MP4 binary patcher with instant zero-WASM fast path for standard
 * MP4 (H.264 / HEVC + AAC) files and automatic FFmpeg WASM fallback for MOV,
 * fragmented MP4, non-AAC audio, or silent videos.
 */

// ─── TRANSLATION DICTIONARY ─────────────────────────────────────────────────

const TRANSLATIONS = {
    en: {
        documentTitle: "ARGUS | TikTok Quality Optimizer",
        "hero-tag": "OPTIMIZATION_PROTOCOL // ARGUS_ENGINE_V6.2",
        "hero-title": 'TikTok Quality <span class="accent-text italic">Optimizer.</span>',
        "hero-desc": "Classic v5.5 & Max v6.2 client-side MP4 container engines. Zero video re-encoding, instant browser patching, maximum TikTok quality bypass.",
        "method-title": "ARGUS PROTOCOL BYPASS",
        "method-desc": "Choose between Argus Classic (v5.5) for universal SDR/HDR videos with real gallery length, or Argus Max (v6.2) which leaves your video stream 100% untouched for HDR & 4K 60fps.",
        "engine-label": "Bypass Engine:",
        "opt-engine-classic": "Argus Classic (v5.5 · Recommended)",
        "opt-engine-max": "Argus Max (v6.2 · HDR / 4K)",
        "engine-mode-badge": "ZERO_REENCODE",
        "preset-label": "Video Preset:",
        "opt-vertical": "Vertical (9:16)",
        "opt-square": "Square (1:1)",
        "opt-landscape": "Landscape (16:9)",
        "method-recommend": "Recommended: 1080p / 4K · H.264 / HEVC + AAC Audio",
        "warning-title": "CLIENT-SIDE BINARY ENGINE (V5.5 & V6.2)",
        "warning-desc": 'Everything runs locally in your browser with zero quality loss. <strong>Classic (v5.5)</strong> keeps your exact duration in gallery; <strong>Max (v6.2)</strong> preserves 100% of your video &amp; HDR stream untouched.',
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
        logApplyClassic: "Starting Argus Classic Engine (v5.5)...",
        logApplyMax: "Starting Argus Max Engine (v6.2)...",
        logModeClassic: "ENGINE 5.5: Strip btrt + SEI Clean + In-Band AAC PCE Tail",
        logModeMax: "ENGINE 6.2: Zero-Touch Video + Dual-Track AAC PCE Bypass",
        logRead: "Reading MP4 container structure...",
        logFastPath: "✓ Standard MP4 + AAC detected — running instant native binary path",
        logNeedRemux: "Container needs normalization (MOV / fragmented / audio prep) — invoking FFmpeg WASM...",
        logWasmLoad: "WASM: Loading FFmpeg Core Engine...",
        logWasmReady: "✓ FFmpeg Engine Ready",
        logWasmWrite: "WASM: Staging media payload...",
        logWasmExec: "WASM: Remuxing container losslessly (-c:v copy) & preparing AAC audio...",
        logPatching: "PATCH: Executing binary container transformation...",
        logSeiStripped: "PATCH: Stripped leading encoder SEI watermark bytes: ",
        logClassicPce: "PATCH: Injected in-band AAC PCE signature into final audio frames: ",
        logMaxDual: "PATCH: Appended 17 silence frames + dual-track AAC PCE (tracks ",
        logComplete: "✓ Optimization complete ",
        logReady: "Ready to Post ✓",
        logAwaiting: "System ready. Awaiting user action.",
        logFailed: "Optimization Failed.",
        logError: "Fatal Error: "
    },
    ar: {
        documentTitle: "آرغوس | نظام تحسين جودة تيك توك",
        "hero-tag": "بروتوكول التحسين // محرك_آرغوس_V6.2",
        "hero-title": 'مُحسِّن جودة <span class="accent-text italic">تيك توك.</span>',
        "hero-desc": "محركا آرغوس Classic v5.5 و Max v6.2 داخل المتصفح مباشرة. بدون إعادة ترميز للفيديو، معالجة فورية، وتجاوز كامل لضغط تيك توك.",
        "method-title": "تجاوز بروتوكول آرغوس",
        "method-desc": "اختر بين آرغوس Classic (v5.5) المناسب لكل فيديوهات SDR/HDR مع الحفاظ على المدة الحقيقية، أو آرغوس Max (v6.2) الذي يترك مسار الفيديو سليماً 100% ومثالي لـ HDR و 4K.",
        "engine-label": "محرك التجاوز:",
        "opt-engine-classic": "آرغوس Classic (v5.5 · موصى به)",
        "opt-engine-max": "آرغوس Max (v6.2 · HDR / 4K)",
        "engine-mode-badge": "بدون_إعادة_ترميز",
        "preset-label": "أبعاد الفيديو:",
        "opt-vertical": "عمودي (9:16)",
        "opt-square": "مربع (1:1)",
        "opt-landscape": "أفقي (16:9)",
        "method-recommend": "موصى به: 1080p / 4K · H.264 / HEVC مع صوت AAC",
        "warning-title": "محرك المعالجة الثنائي المحلي (V5.5 & V6.2)",
        "warning-desc": 'كل المعالجة تتم محلياً داخل متصفحك بدون فقدان للجودة. محرك <strong>Classic (v5.5)</strong> يحافظ على مدة الفيديو الحقيقية؛ ومحرك <strong>Max (v6.2)</strong> يترك بيانات الفيديو و HDR دون أي تعديل.',
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
        logApplyClassic: "بدء تشغيل محرك آرغوس Classic (v5.5)...",
        logApplyMax: "بدء تشغيل محرك آرغوس Max (v6.2)...",
        logModeClassic: "محرك 5.5: تنظيف btrt + إزالة SEI + حقن AAC PCE",
        logModeMax: "محرك 6.2: فيديو سليم 100% + مسار صوت مزدوج AAC PCE",
        logRead: "جاري قراءة بنية حاوية MP4...",
        logFastPath: "✓ تم اكتشاف MP4 + AAC قياسي — تشغيل المعالجة الثنائية الفورية",
        logNeedRemux: "الحاوية تحتاج تهيئة (MOV أو بدون صوت AAC) — جاري تشغيل FFmpeg WASM...",
        logWasmLoad: "WASM: جاري تحميل محرك FFmpeg Core...",
        logWasmReady: "✓ محرك FFmpeg جاهز",
        logWasmWrite: "WASM: تجهيز ملف الفيديو المؤقت...",
        logWasmExec: "WASM: إعادة هيكلة الحاوية بدون فقدان (-c:v copy) وتجهيز صوت AAC...",
        logPatching: "PATCH: جاري تطبيق خوارزمية الترقيع الثنائية...",
        logSeiStripped: "PATCH: تم تنظيف بايتات SEI الإضافية في الإطار الأول: ",
        logClassicPce: "PATCH: تم حقن توقيع AAC PCE في آخر إطارات الصوت: ",
        logMaxDual: "PATCH: تم إلحاق 17 إطار صمت + مسار صوت مزدوج AAC PCE (المسارات ",
        logComplete: "✓ اكتملت عملية التحسين في غضون ",
        logReady: "جاهز للنشر الآن ✓",
        logAwaiting: "النظام مستعد. في انتظار تحميل الملف.",
        logFailed: "فشلت عملية التحسين.",
        logError: "خطأ فادح: "
    }
};

let currentLang = 'en';
let currentEngine = '5.5';

// ─── LANGUAGE & ENGINE SELECTION ────────────────────────────────────────────

function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    localStorage.setItem('argus_lang', lang);

    const htmlEl = document.documentElement;
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const btnEn = document.getElementById('lang-en');
    const btnAr = document.getElementById('lang-ar');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    if (btnAr) btnAr.classList.toggle('active', lang === 'ar');

    const dict = TRANSLATIONS[lang];
    document.title = dict.documentTitle;

    for (const [key, value] of Object.entries(dict)) {
        const el = document.getElementById(key);
        if (el) {
            if (key === 'hero-title' || key === 'warning-desc') {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        }
    }

    const welcomeLog = document.getElementById('terminal-welcome');
    if (welcomeLog) welcomeLog.textContent = dict['terminal-welcome'];

    const statusIndicator = document.getElementById('status-text');
    if (statusIndicator && !argusIsProcessing) {
        statusIndicator.textContent = dict['status-standby'];
    }
}

function getSelectedEngine() {
    const el = document.getElementById('argus-engine');
    const val = el ? el.value : currentEngine;
    return val === '6.2' ? '6.2' : '5.5';
}

// ─── BINARY MP4 STREAM HELPERS ──────────────────────────────────────────────

const CONTAINER_BOXES = new Set(['moov', 'trak', 'mdia', 'minf', 'dinf', 'edts', 'stbl']);
const SUPPORTED_VIDEO_CODECS = new Set(['avc1', 'avc3', 'hvc1', 'hev1', 'dvh1', 'dvhe']);

// Engine 5.5 (Classic): In-band AAC ID_PCE payload written into final 4 AAC samples
const CLASSIC_PCE_11 = new Uint8Array([0xa1, 0xb8, 0x00, 0x20, 0x01, 0x00, 0x00, 0x64, 0x00, 0x00, 0x07]);

// Engine 6.2 (Max): Standard 6-byte stereo AAC-LC silence frame repeated 17 times (9 + 8 chunks)
const MAX_SILENCE_6 = new Uint8Array([0x21, 0x10, 0x04, 0x60, 0x8c, 0x1c]);
const MAX_ADDED_SAMPLES = 17;
const MAX_CHUNK1_SAMPLES = 9;
const MAX_CHUNK2_SAMPLES = 8;

function u16(u8, off) {
    return (u8[off] << 8) | u8[off + 1];
}

function u32(u8, off) {
    return ((u8[off] << 24) | (u8[off + 1] << 16) | (u8[off + 2] << 8) | u8[off + 3]) >>> 0;
}

function u64(u8, off) {
    return u32(u8, off) * 4294967296 + u32(u8, off + 4);
}

function w16(val) {
    return new Uint8Array([(val >>> 8) & 0xff, val & 0xff]);
}

function w32(val) {
    return new Uint8Array([(val >>> 24) & 0xff, (val >>> 16) & 0xff, (val >>> 8) & 0xff, val & 0xff]);
}

function w64(val) {
    const hi = Math.floor(val / 4294967296);
    const lo = Math.floor(val % 4294967296);
    return new Uint8Array([
        (hi >>> 24) & 0xff, (hi >>> 16) & 0xff, (hi >>> 8) & 0xff, hi & 0xff,
        (lo >>> 24) & 0xff, (lo >>> 16) & 0xff, (lo >>> 8) & 0xff, lo & 0xff
    ]);
}

function typeStr(u8, off) {
    return String.fromCharCode(u8[off], u8[off + 1], u8[off + 2], u8[off + 3]);
}

function concatBuffers(arr) {
    let total = 0;
    for (const a of arr) total += a.length;
    const out = new Uint8Array(total);
    let pos = 0;
    for (const a of arr) {
        out.set(a, pos);
        pos += a.length;
    }
    return out;
}

function makeBox(type, content) {
    const out = new Uint8Array(content.length + 8);
    out.set(w32(out.length), 0);
    for (let i = 0; i < 4; i++) out[i + 4] = type.charCodeAt(i);
    out.set(content, 8);
    return out;
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
        if (size < header || p + size > end) break;

        const type = typeStr(u8, p + 4);
        const b = { type, start: p, end: p + size, size, header, children: null };
        if (CONTAINER_BOXES.has(type) && p + header < p + size) {
            b.children = parseBoxes(u8, p + header, p + size);
        }
        boxes.push(b);
        p += size;
    }
    return boxes;
}

function raw(u8, b) { return u8.subarray(b.start, b.end); }
function payload(u8, b) { return u8.subarray(b.start + b.header, b.end); }

function findChild(b, type) {
    if (!b || !b.children) return null;
    for (let i = 0; i < b.children.length; i++) {
        if (b.children[i].type === type) return b.children[i];
    }
    return null;
}

function findStbl(trak) {
    const mdia = findChild(trak, 'mdia');
    const minf = mdia && findChild(mdia, 'minf');
    return minf ? findChild(minf, 'stbl') : null;
}

function getTrakHandler(u8, trak) {
    const mdia = findChild(trak, 'mdia');
    const hdlr = mdia && findChild(mdia, 'hdlr');
    if (!hdlr) return '';
    const p = payload(u8, hdlr);
    return p.length >= 12 ? typeStr(p, 8) : '';
}

function getTrakCodec(u8, trak) {
    const stbl = findStbl(trak);
    const stsd = stbl && findChild(stbl, 'stsd');
    if (!stsd) return '';
    const p = payload(u8, stsd);
    if (p.length < 16 || u32(p, 4) < 1) return '';
    return typeStr(p, 12);
}

function makeUdta(tagText) {
    const textBytes = new TextEncoder().encode(tagText);
    const dataBox = makeBox('data', concatBuffers([w32(1), w32(0), textBytes]));
    const tooBox = makeBox('\xa9too', dataBox);
    const ilstBox = makeBox('ilst', tooBox);
    const hdlrPayload = new Uint8Array(25);
    hdlrPayload[8] = 0x6d; hdlrPayload[9] = 0x64; hdlrPayload[10] = 0x69; hdlrPayload[11] = 0x72; // 'mdir'
    const hdlrBox = makeBox('hdlr', hdlrPayload);
    const metaBox = makeBox('meta', concatBuffers([new Uint8Array(4), hdlrBox, ilstBox]));
    return makeBox('udta', metaBox);
}

function inspectMp4Layout(u8) {
    try {
        const topBoxes = parseBoxes(u8, 0, u8.length);
        if (!topBoxes.length || topBoxes[0].type !== 'ftyp') {
            return { ready: false, reason: 'not_mp4', hasAudio: false };
        }
        if (topBoxes.some(b => b.type === 'moof')) {
            return { ready: false, reason: 'fragmented', hasAudio: false };
        }
        const moovs = topBoxes.filter(b => b.type === 'moov');
        const mdats = topBoxes.filter(b => b.type === 'mdat');
        if (moovs.length !== 1 || mdats.length !== 1) {
            return { ready: false, reason: 'multi_moov_mdat', hasAudio: false };
        }
        const moov = moovs[0];
        const traks = (moov.children || []).filter(b => b.type === 'trak');
        const videoTraks = traks.filter(t => getTrakHandler(u8, t) === 'vide');
        const audioTraks = traks.filter(t => getTrakHandler(u8, t) === 'soun');

        if (videoTraks.length !== 1) {
            return { ready: false, reason: 'video_track_count', hasAudio: audioTraks.length > 0 };
        }
        const vCodec = getTrakCodec(u8, videoTraks[0]);
        if (!SUPPORTED_VIDEO_CODECS.has(vCodec)) {
            return { ready: false, reason: 'unsupported_video_codec', codec: vCodec, hasAudio: audioTraks.length > 0 };
        }
        if (audioTraks.length === 0) {
            return { ready: false, reason: 'no_audio', codec: vCodec, hasAudio: false };
        }
        const aCodec = getTrakCodec(u8, audioTraks[0]);
        if (aCodec !== 'mp4a') {
            return { ready: false, reason: 'non_aac_audio', codec: vCodec, audioCodec: aCodec, hasAudio: true };
        }
        return { ready: true, codec: vCodec, audioCodec: aCodec, hasAudio: true };
    } catch (_) {
        return { ready: false, reason: 'parse_error', hasAudio: false };
    }
}

function getSampleTable(u8, stbl) {
    const stsz = findChild(stbl, 'stsz');
    const stsc = findChild(stbl, 'stsc');
    const stco = findChild(stbl, 'stco') || findChild(stbl, 'co64');
    if (!stsz || !stsc || !stco) {
        throw new Error(currentLang === 'ar' ? 'جداول العينات stsz أو stsc أو stco مفقودة' : 'Incomplete sample tables (stsz/stsc/stco)');
    }

    const psz = payload(u8, stsz);
    const fixedSize = u32(psz, 4);
    const sampleCount = u32(psz, 8);
    const sizes = new Array(sampleCount);
    for (let i = 0; i < sampleCount; i++) {
        sizes[i] = fixedSize !== 0 ? fixedSize : u32(psz, 12 + i * 4);
    }

    const pco = payload(u8, stco);
    const is64 = stco.type === 'co64';
    const chunkCount = u32(pco, 4);
    const chunkOffsets = new Array(chunkCount);
    for (let i = 0; i < chunkCount; i++) {
        chunkOffsets[i] = is64 ? u64(pco, 8 + i * 8) : u32(pco, 8 + i * 4);
    }

    const psc = payload(u8, stsc);
    const scCount = u32(psc, 4);
    const offsets = [];
    for (let i = 0; i < scCount; i++) {
        const firstChunk = u32(psc, 8 + i * 12);
        const spc = u32(psc, 12 + i * 12);
        const lastChunk = (i + 1 < scCount) ? u32(psc, 8 + (i + 1) * 12) - 1 : chunkCount;
        for (let c = firstChunk; c <= lastChunk && c <= chunkCount; c++) {
            let off = chunkOffsets[c - 1];
            for (let s = 0; s < spc && offsets.length < sampleCount; s++) {
                offsets.push(off);
                off += sizes[offsets.length - 1];
            }
        }
    }
    if (offsets.length !== sampleCount) {
        throw new Error(currentLang === 'ar' ? 'تعارض في فهرس عينات الفيديو أو الصوت' : 'Sample table offset count mismatch');
    }
    return { sizes, offsets, chunkCount, sampleCount, is64 };
}

// ─── ENGINE 5.5: ARGUS CLASSIC (HAZE CLASSIC v5.5) ──────────────────────────

function stripBtrtFromStsd(u8, stsd, isAudio) {
    const p = payload(u8, stsd);
    if (p.length < 16) return raw(u8, stsd);
    const verFlags = p.subarray(0, 4);
    const entryCount = u32(p, 4);
    const entries = [];
    let pos = 8;
    for (let i = 0; i < entryCount && pos + 8 <= p.length; i++) {
        const esz = u32(p, pos);
        if (esz < 8 || pos + esz > p.length) break;
        const entry = p.subarray(pos, pos + esz);
        const etype = typeStr(entry, 4);
        let subOff = isAudio ? 36 : 86;
        if (isAudio && entry.length >= 18) {
            const ver = u16(entry, 16);
            if (ver === 1) subOff = 52;
            else if (ver === 2) subOff = 72;
        }
        if (subOff < entry.length) {
            const fixedPart = entry.subarray(8, subOff);
            const subs = parseBoxes(entry, subOff, entry.length);
            const kept = subs.filter(sb => sb.type !== 'btrt').map(sb => raw(entry, sb));
            entries.push(makeBox(etype, concatBuffers([fixedPart, ...kept])));
        } else {
            entries.push(entry);
        }
        pos += esz;
    }
    return makeBox('stsd', concatBuffers([verFlags, w32(entries.length), ...entries]));
}

function detectLeadingSeiBytes(u8, videoStbl, vSample0Off, vSample0Size) {
    const stsd = findChild(videoStbl, 'stsd');
    if (!stsd || vSample0Size < 6) return 0;
    const p = payload(u8, stsd);
    if (p.length < 94) return 0;
    const entrySize = u32(p, 8);
    const entryType = typeStr(p, 12);
    const isAvc = entryType === 'avc1' || entryType === 'avc3';
    const isHevc = entryType === 'hvc1' || entryType === 'hev1';
    if (!isAvc && !isHevc) return 0;

    const subBoxes = parseBoxes(p, 8 + 86, Math.min(p.length, 8 + entrySize));
    const cfg = subBoxes.find(b => b.type === (isAvc ? 'avcC' : 'hvcC'));
    if (!cfg) return 0;
    const cfgBody = payload(p, cfg);
    const lengthSize = (cfgBody[isAvc ? 4 : 21] & 0x03) + 1;

    let pos = vSample0Off;
    const end = vSample0Off + vSample0Size;
    let removed = 0;
    while (pos + lengthSize + 1 <= end) {
        let nalLen = 0;
        for (let k = 0; k < lengthSize; k++) nalLen = nalLen * 256 + u8[pos + k];
        if (nalLen < 1 || pos + lengthSize + nalLen > end) break;
        const hdrByte = u8[pos + lengthSize];
        const isSei = isAvc
            ? ((hdrByte & 0x1f) === 6)
            : ((((hdrByte >> 1) & 0x3f) === 39) || (((hdrByte >> 1) & 0x3f) === 40));
        if (!isSei) break;
        if (pos + lengthSize + nalLen >= end) break;
        removed += lengthSize + nalLen;
        pos += lengthSize + nalLen;
    }
    return removed;
}

function patchClassic55(u8, dict) {
    const topBoxes = parseBoxes(u8, 0, u8.length);
    const ftyp = topBoxes.find(b => b.type === 'ftyp');
    const moov = topBoxes.find(b => b.type === 'moov');
    const mdat = topBoxes.find(b => b.type === 'mdat');
    if (!ftyp || !moov || !mdat) {
        throw new Error(currentLang === 'ar' ? 'حاوية MP4 غير صالحة: مفقود بيانات ftyp أو moov أو mdat' : 'Invalid MP4: missing ftyp, moov, or mdat');
    }

    const traks = (moov.children || []).filter(b => b.type === 'trak');
    const videoTrak = traks.find(t => getTrakHandler(u8, t) === 'vide');
    const audioTrak = traks.find(t => getTrakHandler(u8, t) === 'soun');
    if (!videoTrak || !audioTrak) {
        throw new Error(currentLang === 'ar' ? 'محرك Classic 5.5 يتطلب مسار فيديو ومسار صوت AAC' : 'Classic 5.5 requires both video and AAC audio tracks');
    }

    const vStbl = findStbl(videoTrak);
    const aStbl = findStbl(audioTrak);
    const vTable = getSampleTable(u8, vStbl);
    const aTable = getSampleTable(u8, aStbl);

    const vSample0Off = vTable.offsets[0];
    const vSample0Size = vTable.sizes[0];
    const seiRemove = detectLeadingSeiBytes(u8, vStbl, vSample0Off, vSample0Size);
    if (seiRemove > 0) {
        logToTerminal(`${dict.logSeiStripped}${seiRemove}B`, 'normal');
    }

    const origMdatPayloadStart = mdat.start + mdat.header;
    const origMdatPayload = payload(u8, mdat);

    const newMdatPayload = new Uint8Array(origMdatPayload.length - seiRemove);
    const seiRel = vSample0Off - origMdatPayloadStart;
    if (seiRemove > 0 && seiRel >= 0 && seiRel + seiRemove <= origMdatPayload.length) {
        newMdatPayload.set(origMdatPayload.subarray(0, seiRel), 0);
        newMdatPayload.set(origMdatPayload.subarray(seiRel + seiRemove), seiRel);
    } else {
        newMdatPayload.set(origMdatPayload, 0);
    }

    const pceCount = Math.min(4, aTable.sampleCount);
    for (let i = aTable.sampleCount - pceCount; i < aTable.sampleCount; i++) {
        const origOff = aTable.offsets[i];
        const sz = aTable.sizes[i];
        let rel = origOff - origMdatPayloadStart;
        if (seiRemove > 0 && origOff > vSample0Off) rel -= seiRemove;
        if (rel >= 0 && rel + sz <= newMdatPayload.length) {
            newMdatPayload.fill(0, rel, rel + sz);
            newMdatPayload.set(CLASSIC_PCE_11.subarray(0, Math.min(CLASSIC_PCE_11.length, sz)), rel);
        }
    }
    logToTerminal(`${dict.logClassicPce}${pceCount}`, 'success');

    function shiftOffsetsBox(box, moovDelta) {
        const p = payload(u8, box);
        const src64 = box.type === 'co64';
        const cnt = u32(p, 4);
        let maxOff = 0;
        const shifted = new Array(cnt);
        for (let i = 0; i < cnt; i++) {
            const origOff = src64 ? u64(p, 8 + i * 8) : u32(p, 8 + i * 4);
            const nextOff = origOff + moovDelta - (seiRemove > 0 && origOff > vSample0Off ? seiRemove : 0);
            shifted[i] = nextOff;
            if (nextOff > maxOff) maxOff = nextOff;
        }
        const dst64 = src64 || maxOff > 0xffffffff;
        const elemSz = dst64 ? 8 : 4;
        const out = new Uint8Array(8 + cnt * elemSz);
        out.set(p.subarray(0, 4), 0);
        out.set(w32(cnt), 4);
        for (let i = 0; i < cnt; i++) {
            out.set(dst64 ? w64(shifted[i]) : w32(shifted[i]), 8 + i * elemSz);
        }
        return makeBox(dst64 ? 'co64' : 'stco', out);
    }

    function patchVideoStsz(stsz) {
        if (seiRemove === 0) return raw(u8, stsz);
        const p = payload(u8, stsz);
        const fixedSize = u32(p, 4);
        const cnt = u32(p, 8);
        if (fixedSize !== 0) {
            const out = new Uint8Array(12 + cnt * 4);
            out.set(p.subarray(0, 4), 0);
            out.set(w32(0), 4);
            out.set(w32(cnt), 8);
            out.set(w32(fixedSize - seiRemove), 12);
            for (let i = 1; i < cnt; i++) out.set(w32(fixedSize), 12 + i * 4);
            return makeBox('stsz', out);
        }
        const out = new Uint8Array(p);
        out.set(w32(vSample0Size - seiRemove), 12);
        return makeBox('stsz', out);
    }

    const udtaBox = makeUdta('Argus Quality Method | Classic 5.5');

    function buildMoov(moovDelta) {
        let curTrak = null;
        function walk(box) {
            if (box.type === 'udta' && !curTrak) return null;
            if (box.type === 'stsd' && (curTrak === videoTrak || curTrak === audioTrak)) {
                return stripBtrtFromStsd(u8, box, curTrak === audioTrak);
            }
            if (box.type === 'stsz' && curTrak === videoTrak) {
                return patchVideoStsz(box);
            }
            if (box.type === 'stco' || box.type === 'co64') {
                return shiftOffsetsBox(box, moovDelta);
            }
            if (box.children) {
                const parts = [];
                for (const c of box.children) {
                    const prev = curTrak;
                    if (c.type === 'trak') curTrak = c;
                    const res = walk(c);
                    curTrak = prev;
                    if (res) parts.push(res);
                }
                if (box.type === 'moov') parts.push(udtaBox);
                return makeBox(box.type, concatBuffers(parts));
            }
            return raw(u8, box);
        }
        return walk(moov);
    }

    const probeMoov = buildMoov(0);
    let newMdatStart = 0;
    for (const b of topBoxes) {
        if (b.type === 'mdat') break;
        if (b.type === 'moov') newMdatStart += probeMoov.length;
        else newMdatStart += b.size;
    }
    const newMdatHdr = newMdatPayload.length + 8 > 0xffffffff ? 16 : 8;
    const moovDelta = (newMdatStart + newMdatHdr) - origMdatPayloadStart;
    const finalMoov = buildMoov(moovDelta);

    const mdatHeaderBytes = newMdatHdr === 8
        ? concatBuffers([w32(8 + newMdatPayload.length), new Uint8Array([0x6d, 0x64, 0x61, 0x74])])
        : concatBuffers([w32(1), new Uint8Array([0x6d, 0x64, 0x61, 0x74]), w64(16 + newMdatPayload.length)]);

    const blobParts = [];
    for (const b of topBoxes) {
        if (b.type === 'moov') blobParts.push(finalMoov);
        else if (b.type === 'mdat') {
            blobParts.push(mdatHeaderBytes);
            blobParts.push(newMdatPayload);
        } else {
            blobParts.push(raw(u8, b));
        }
    }
    return new Blob(blobParts, { type: 'video/mp4' });
}

// ─── ENGINE 6.2: ARGUS MAX (HAZE MAX v6.2) ──────────────────────────────────

function buildMaxAsc(sampleRate) {
    const srTable = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
    let sfi = srTable.indexOf(sampleRate);
    if (sfi < 0) sfi = 4;

    const bits = [];
    const push = (val, n) => { for (let i = n - 1; i >= 0; i--) bits.push((val >> i) & 1); };
    // AudioSpecificConfig: AAC-LC (2), sfi, channelConfig = 0 (Explicit PCE)
    push(2, 5); push(sfi, 4); push(0, 4);
    // GASpecificConfig
    push(0, 1); push(0, 1); push(0, 1);
    // Explicit PCE: side = 1 CPE (tag 0)
    push(0, 4); push(1, 2); push(sfi, 4);
    push(0, 4); push(1, 4); push(0, 4); push(0, 2); push(0, 3); push(0, 4);
    push(0, 1); push(0, 1); push(0, 1);
    push(1, 1); push(0, 4);
    while (bits.length % 8 !== 0) bits.push(0);
    push(0, 8);

    const out = new Uint8Array(bits.length / 8);
    for (let i = 0; i < bits.length; i++) out[i >> 3] |= (bits[i] << (7 - (i & 7)));
    return out;
}

function buildMaxMp4aEntry2(sampleRate) {
    const asc = buildMaxAsc(sampleRate);
    const esdsPayload = concatBuffers([
        new Uint8Array([0, 0, 0, 0]),
        new Uint8Array([0x03, 0x80, 0x80, 0x80, 0x20 + asc.length, 0x00, 0x01, 0x00]),
        new Uint8Array([0x04, 0x80, 0x80, 0x80, 0x12 + asc.length, 0x40, 0x15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
        new Uint8Array([0x05, 0x80, 0x80, 0x80, asc.length]),
        asc,
        new Uint8Array([0x06, 0x80, 0x80, 0x80, 0x01, 0x02])
    ]);
    const esdsBox = makeBox('esds', esdsPayload);
    const hdr = new Uint8Array(28);
    hdr.set(w16(1), 6);   // data_reference_index = 1
    hdr.set(w16(2), 16);  // channelcount = 2
    hdr.set(w16(16), 18); // samplesize = 16
    hdr.set(w32((sampleRate << 16) >>> 0), 24);
    return makeBox('mp4a', concatBuffers([hdr, esdsBox]));
}

function patchMax62(u8, dict) {
    const topBoxes = parseBoxes(u8, 0, u8.length);
    const ftyp = topBoxes.find(b => b.type === 'ftyp');
    const moov = topBoxes.find(b => b.type === 'moov');
    const mdat = topBoxes.find(b => b.type === 'mdat');
    if (!ftyp || !moov || !mdat) {
        throw new Error(currentLang === 'ar' ? 'حاوية MP4 غير صالحة: مفقود بيانات ftyp أو moov أو mdat' : 'Invalid MP4: missing ftyp, moov, or mdat');
    }

    const mvhd = findChild(moov, 'mvhd');
    const traks = (moov.children || []).filter(b => b.type === 'trak');
    const audioTrak = traks.find(t => getTrakHandler(u8, t) === 'soun');
    if (!mvhd || !audioTrak) {
        throw new Error(currentLang === 'ar' ? 'محرك Max 6.2 يتطلب بيانات mvhd ومسار صوت AAC' : 'Max 6.2 requires mvhd and an AAC audio track');
    }

    const silencePayload = new Uint8Array(MAX_ADDED_SAMPLES * 6);
    for (let i = 0; i < MAX_ADDED_SAMPLES; i++) silencePayload.set(MAX_SILENCE_6, i * 6);
    const mdat2Box = makeBox('mdat', silencePayload);

    // Zero-copy top-level order: ftyp + original mdat + mdat2 (110B) + moov
    const origMdatRaw = raw(u8, mdat);
    const newMdat1PayloadStart = ftyp.size + mdat.header;
    const origMdatPayloadStart = mdat.start + mdat.header;
    const mdat1Shift = newMdat1PayloadStart - origMdatPayloadStart;
    const mdat2PayloadStart = ftyp.size + origMdatRaw.length + 8;

    const pmvhd = payload(u8, mvhd);
    const mvhdVer = pmvhd[0];
    const mvhdTs = mvhdVer === 1 ? u32(pmvhd, 20) : u32(pmvhd, 12);
    const mvhdDur = mvhdVer === 1 ? u64(pmvhd, 24) : u32(pmvhd, 16);
    const nextTidOff = mvhdVer === 1 ? 108 : 96;
    const nextTrackId = u32(pmvhd, nextTidOff);

    const aMdia = findChild(audioTrak, 'mdia');
    const aMdhd = aMdia && findChild(aMdia, 'mdhd');
    const pamd = payload(u8, aMdhd);
    const amdVer = pamd[0];
    const audioTs = amdVer === 1 ? u32(pamd, 20) : u32(pamd, 12);
    const audioDur = amdVer === 1 ? u64(pamd, 24) : u32(pamd, 16);

    const addedAudioTicks = MAX_ADDED_SAMPLES * 1024;
    const newAudioMediaDur = audioDur + addedAudioTicks;
    const newAudioMovieDur = Math.round(newAudioMediaDur * mvhdTs / audioTs);
    const newMvhdDur = Math.max(mvhdDur, newAudioMovieDur);

    const aStbl = findStbl(audioTrak);
    const aStsd = findChild(aStbl, 'stsd');
    const origAudioStsdCount = u32(payload(u8, aStsd), 4);
    const pceDescIndex = origAudioStsdCount + 1;
    const aStco = findChild(aStbl, 'stco') || findChild(aStbl, 'co64');
    const origAudioChunks = u32(payload(u8, aStco), 4);
    const entry2Box = buildMaxMp4aEntry2(audioTs);

    function shiftSimpleStco(box) {
        const p = payload(u8, box);
        const src64 = box.type === 'co64';
        const cnt = u32(p, 4);
        let maxOff = 0;
        const shifted = new Array(cnt);
        for (let i = 0; i < cnt; i++) {
            const off = (src64 ? u64(p, 8 + i * 8) : u32(p, 8 + i * 4)) + mdat1Shift;
            shifted[i] = off;
            if (off > maxOff) maxOff = off;
        }
        const dst64 = src64 || maxOff > 0xffffffff;
        const elemSz = dst64 ? 8 : 4;
        const out = new Uint8Array(8 + cnt * elemSz);
        out.set(p.subarray(0, 4), 0);
        out.set(w32(cnt), 4);
        for (let i = 0; i < cnt; i++) {
            out.set(dst64 ? w64(shifted[i]) : w32(shifted[i]), 8 + i * elemSz);
        }
        return makeBox(dst64 ? 'co64' : 'stco', out);
    }

    function patchAudioTrak(trakBox, isPrimary, overrideTrackId) {
        function walk(b) {
            if (b.type === 'tkhd') {
                const out = new Uint8Array(payload(u8, b));
                const ver = out[0];
                if (overrideTrackId != null) out.set(w32(overrideTrackId), ver === 1 ? 20 : 12);
                if (ver === 1) out.set(w64(newAudioMovieDur), 28);
                else out.set(w32(newAudioMovieDur), 20);
                return makeBox('tkhd', out);
            }
            if (b.type === 'elst') {
                const out = new Uint8Array(payload(u8, b));
                const ver = out[0];
                const cnt = u32(out, 4);
                if (cnt >= 1) {
                    const stride = ver === 1 ? 20 : 12;
                    const off = 8 + (cnt - 1) * stride;
                    if (cnt === 1) {
                        if (ver === 1) out.set(w64(newAudioMovieDur), off);
                        else out.set(w32(newAudioMovieDur), off);
                    } else {
                        const oldSeg = ver === 1 ? u64(out, off) : u32(out, off);
                        const delta = Math.round(addedAudioTicks * mvhdTs / audioTs);
                        if (ver === 1) out.set(w64(oldSeg + delta), off);
                        else out.set(w32(oldSeg + delta), off);
                    }
                }
                return makeBox('elst', out);
            }
            if (b.type === 'mdhd') {
                const out = new Uint8Array(payload(u8, b));
                const ver = out[0];
                if (ver === 1) out.set(w64(newAudioMediaDur), 24);
                else out.set(w32(newAudioMediaDur), 16);
                return makeBox('mdhd', out);
            }
            if (b.type === 'stsd') {
                if (!isPrimary) return raw(u8, b);
                const p = payload(u8, b);
                const cnt = u32(p, 4);
                return makeBox('stsd', concatBuffers([p.subarray(0, 4), w32(cnt + 1), p.subarray(8), entry2Box]));
            }
            if (b.type === 'stts') {
                const p = payload(u8, b);
                const cnt = u32(p, 4);
                const entries = [];
                for (let i = 0; i < cnt; i++) entries.push([u32(p, 8 + i * 8), u32(p, 12 + i * 8)]);
                if (entries.length > 0 && entries[entries.length - 1][1] === 1024) {
                    entries[entries.length - 1][0] += MAX_ADDED_SAMPLES;
                } else {
                    entries.push([MAX_ADDED_SAMPLES, 1024]);
                }
                const out = new Uint8Array(8 + entries.length * 8);
                out.set(p.subarray(0, 4), 0);
                out.set(w32(entries.length), 4);
                for (let i = 0; i < entries.length; i++) {
                    out.set(w32(entries[i][0]), 8 + i * 8);
                    out.set(w32(entries[i][1]), 12 + i * 8);
                }
                return makeBox('stts', out);
            }
            if (b.type === 'stsc') {
                const p = payload(u8, b);
                const cnt = u32(p, 4);
                const out = new Uint8Array(8 + (cnt + 2) * 12);
                out.set(p.subarray(0, 4), 0);
                out.set(w32(cnt + 2), 4);
                out.set(p.subarray(8, 8 + cnt * 12), 8);
                const o1 = 8 + cnt * 12;
                out.set(w32(origAudioChunks + 1), o1);
                out.set(w32(MAX_CHUNK1_SAMPLES), o1 + 4);
                out.set(w32(1), o1 + 8);
                const o2 = o1 + 12;
                out.set(w32(origAudioChunks + 2), o2);
                out.set(w32(MAX_CHUNK2_SAMPLES), o2 + 4);
                out.set(w32(isPrimary ? pceDescIndex : 1), o2 + 8);
                return makeBox('stsc', out);
            }
            if (b.type === 'stsz') {
                const p = payload(u8, b);
                const fixedSz = u32(p, 4);
                const cnt = u32(p, 8);
                const out = new Uint8Array(12 + (cnt + MAX_ADDED_SAMPLES) * 4);
                out.set(p.subarray(0, 4), 0);
                out.set(w32(0), 4);
                out.set(w32(cnt + MAX_ADDED_SAMPLES), 8);
                if (fixedSz !== 0) {
                    for (let i = 0; i < cnt; i++) out.set(w32(fixedSz), 12 + i * 4);
                } else {
                    out.set(p.subarray(12, 12 + cnt * 4), 12);
                }
                for (let i = 0; i < MAX_ADDED_SAMPLES; i++) out.set(w32(6), 12 + (cnt + i) * 4);
                return makeBox('stsz', out);
            }
            if (b.type === 'stco' || b.type === 'co64') {
                const p = payload(u8, b);
                const src64 = b.type === 'co64';
                const dst64 = src64 || (mdat2PayloadStart + MAX_CHUNK1_SAMPLES * 6 > 0xffffffff);
                const cnt = u32(p, 4);
                const elemSz = dst64 ? 8 : 4;
                const out = new Uint8Array(8 + (cnt + 2) * elemSz);
                out.set(p.subarray(0, 4), 0);
                out.set(w32(cnt + 2), 4);
                for (let i = 0; i < cnt; i++) {
                    const off = (src64 ? u64(p, 8 + i * 8) : u32(p, 8 + i * 4)) + mdat1Shift;
                    out.set(dst64 ? w64(off) : w32(off), 8 + i * elemSz);
                }
                const c1 = mdat2PayloadStart;
                const c2 = mdat2PayloadStart + MAX_CHUNK1_SAMPLES * 6;
                out.set(dst64 ? w64(c1) : w32(c1), 8 + cnt * elemSz);
                out.set(dst64 ? w64(c2) : w32(c2), 8 + (cnt + 1) * elemSz);
                return makeBox(dst64 ? 'co64' : 'stco', out);
            }
            if (b.type === 'sbgp') {
                const p = payload(u8, b);
                const ver = p[0];
                const cntOff = (ver === 1 ? 16 : 12) - 4;
                const cnt = u32(p, cntOff);
                const out = new Uint8Array(p.length + 8);
                out.set(p, 0);
                out.set(w32(cnt + 1), cntOff);
                out.set(w32(MAX_ADDED_SAMPLES), p.length);
                out.set(w32(0), p.length + 4);
                return makeBox('sbgp', out);
            }
            if (b.children) {
                return makeBox(b.type, concatBuffers(b.children.map(walk)));
            }
            return raw(u8, b);
        }
        return walk(trakBox);
    }

    function patchOtherTrak(trakBox) {
        function walk(b) {
            if (b.type === 'stco' || b.type === 'co64') return shiftSimpleStco(b);
            if (b.children) return makeBox(b.type, concatBuffers(b.children.map(walk)));
            return raw(u8, b);
        }
        return walk(trakBox);
    }

    const aTkhd = findChild(audioTrak, 'tkhd');
    const paTk = payload(u8, aTkhd);
    const primaryAudioTid = paTk[0] === 1 ? u32(paTk, 20) : u32(paTk, 12);

    const newMvhdPayload = new Uint8Array(pmvhd);
    if (mvhdVer === 1) newMvhdPayload.set(w64(newMvhdDur), 24);
    else newMvhdPayload.set(w32(newMvhdDur), 16);
    newMvhdPayload.set(w32(nextTrackId + 1), nextTidOff);
    const newMvhdBox = makeBox('mvhd', newMvhdPayload);

    const moovParts = [];
    for (const c of moov.children) {
        if (c.type === 'mvhd') {
            moovParts.push(newMvhdBox);
        } else if (c.type === 'udta') {
            continue;
        } else if (c === audioTrak) {
            moovParts.push(patchAudioTrak(audioTrak, true, null));
            moovParts.push(patchAudioTrak(audioTrak, false, nextTrackId));
        } else if (c.type === 'trak') {
            moovParts.push(patchOtherTrak(c));
        } else {
            moovParts.push(raw(u8, c));
        }
    }
    moovParts.push(makeUdta('Argus Quality Method | Max 6.2'));
    const newMoovBox = makeBox('moov', concatBuffers(moovParts));

    logToTerminal(`${dict.logMaxDual}#${primaryAudioTid} + #${nextTrackId})`, 'success');
    return new Blob([raw(u8, ftyp), origMdatRaw, mdat2Box, newMoovBox], { type: 'video/mp4' });
}

// ─── FFMPEG WASM ON-DEMAND NORMALIZER (FALLBACK FOR MOV / SILENT / NON-AAC) ─

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

async function normalizeWithFFmpeg(inputU8, layoutInfo, onProgress) {
    const dict = TRANSLATIONS[currentLang];
    const ffmpeg = await loadFFmpegInstance();
    onProgress(35);

    logToTerminal(dict.logWasmWrite, 'normal');
    await ffmpeg.writeFile('input.mp4', inputU8);
    onProgress(50);

    logToTerminal(dict.logWasmExec, 'highlight');
    let exitCode = 1;

    if (layoutInfo.reason === 'no_audio') {
        // Video has no audio track — copy video losslessly and mux a clean silent AAC track
        exitCode = await ffmpeg.exec([
            '-y', '-v', 'warning',
            '-i', 'input.mp4',
            '-f', 'lavfi', '-i', 'anullsrc=channel_layout=stereo:sample_rate=44100',
            '-map', '0:v:0', '-map', '1:a:0',
            '-c:v', 'copy',
            '-c:a', 'aac', '-ar', '44100', '-ac', '2', '-b:a', '128k',
            '-shortest',
            '-map_metadata', '-1', '-map_chapters', '-1',
            '-movflags', '+faststart',
            'temp.mp4'
        ]);
    } else {
        // Remux container & normalize audio track to AAC while copying video 100% losslessly
        exitCode = await ffmpeg.exec([
            '-y', '-v', 'warning',
            '-i', 'input.mp4',
            '-map', '0:v:0', '-map', '0:a:0',
            '-c:v', 'copy',
            '-c:a', 'aac', '-ar', '48000', '-ac', '2', '-b:a', '320k',
            '-flags:a', '+bitexact', '-avoid_negative_ts', 'make_zero',
            '-map_metadata', '-1', '-map_chapters', '-1',
            '-movflags', '+faststart',
            'temp.mp4'
        ]);
        // If input turned out to have no audio stream (e.g. silent MOV), retry with silent AAC
        if (exitCode !== 0) {
            exitCode = await ffmpeg.exec([
                '-y', '-v', 'warning',
                '-i', 'input.mp4',
                '-f', 'lavfi', '-i', 'anullsrc=channel_layout=stereo:sample_rate=44100',
                '-map', '0:v:0', '-map', '1:a:0',
                '-c:v', 'copy',
                '-c:a', 'aac', '-ar', '44100', '-ac', '2', '-b:a', '128k',
                '-shortest',
                '-map_metadata', '-1', '-map_chapters', '-1',
                '-movflags', '+faststart',
                'temp.mp4'
            ]);
        }
    }

    if (exitCode !== 0) {
        try { await ffmpeg.deleteFile('input.mp4'); } catch (_) {}
        throw new Error(currentLang === 'ar' ? 'فشل تهيئة حاوية الفيديو عبر FFmpeg' : 'FFmpeg container normalization failed');
    }

    onProgress(75);
    const outU8 = await ffmpeg.readFile('temp.mp4');
    try {
        await ffmpeg.deleteFile('input.mp4');
        await ffmpeg.deleteFile('temp.mp4');
    } catch (_) {}

    return outU8;
}

// ─── CORE OPTIMIZATION PIPELINE ─────────────────────────────────────────────

async function argusOptimizeVideo(arrayBuffer, engine, onProgress) {
    const dict = TRANSLATIONS[currentLang];
    const start = Date.now();

    logToTerminal(dict.logRead, 'normal');
    onProgress(15);

    let u8 = new Uint8Array(arrayBuffer);
    const layout = inspectMp4Layout(u8);

    if (layout.ready) {
        logToTerminal(dict.logFastPath, 'success');
        onProgress(55);
    } else {
        logToTerminal(dict.logNeedRemux, 'warning');
        u8 = await normalizeWithFFmpeg(u8, layout, onProgress);
        const recheck = inspectMp4Layout(u8);
        if (!recheck.ready) {
            throw new Error(
                currentLang === 'ar'
                    ? `ملف غير مدعوم (${recheck.reason}). يرجى التصدير بصيغة MP4 (H.264 أو HEVC) مع صوت AAC.`
                    : `Unsupported export (${recheck.reason}). Export as standard MP4 (H.264 / HEVC) with AAC audio.`
            );
        }
    }

    logToTerminal(dict.logPatching, 'highlight');
    onProgress(80);

    const outputBlob = engine === '6.2'
        ? patchMax62(u8, dict)
        : patchClassic55(u8, dict);

    u8 = null;
    onProgress(95);

    const elapsed = ((Date.now() - start) / 1000).toFixed(2);
    const sizeMB = (outputBlob.size / 1048576).toFixed(2);
    logToTerminal(`${dict.logComplete}(${elapsed}s) — ${sizeMB} MB`, 'success');

    return { success: true, blob: outputBlob };
}

// ─── TERMINAL VIEW ENGINE ───────────────────────────────────────────────────

let argusIsProcessing = false;
let activeOutputUrl = null;

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
    const engine = getSelectedEngine();
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
                if (presetEl) presetEl.value = detectedPreset;
                resolve();
            };
            tempVideo.onerror = () => resolve();
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
        console.warn('Dimension reading failed', e);
    }

    try {
        const buf = await file.arrayBuffer();

        logToTerminal(engine === '6.2' ? dict.logApplyMax : dict.logApplyClassic, 'highlight');
        logToTerminal(engine === '6.2' ? dict.logModeMax : dict.logModeClassic, 'success');

        const result = await argusOptimizeVideo(buf, engine, (pct) => {
            setProgressStatus(pct);
        });

        if (result.success) {
            setProgressStatus(100);

            if (activeOutputUrl) URL.revokeObjectURL(activeOutputUrl);
            const suffix = engine === '6.2' ? '_argus_max.mp4' : '_argus_classic.mp4';
            const outputName = file.name.replace(/\.[^/.]+$/, '') + suffix;
            activeOutputUrl = URL.createObjectURL(result.blob);

            const downloadBtn = document.getElementById('argus-download-btn');
            if (downloadContainer && downloadBtn) {
                downloadBtn.href = activeOutputUrl;
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
    const savedEngine = localStorage.getItem('argus_engine') || '5.5';
    currentEngine = savedEngine === '6.2' ? '6.2' : '5.5';

    const engineSelect = document.getElementById('argus-engine');
    if (engineSelect) {
        engineSelect.value = currentEngine;
        engineSelect.addEventListener('change', (e) => {
            currentEngine = e.target.value === '6.2' ? '6.2' : '5.5';
            localStorage.setItem('argus_engine', currentEngine);
        });
    }

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
});
