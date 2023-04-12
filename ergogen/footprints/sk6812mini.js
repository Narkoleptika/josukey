module.exports = {
    params: {
        designator: 'LED',
        din: undefined,
        dout: undefined,
        cutout: false,
        VCC: { type: 'net', value: 'VCC' },
        GND: { type: 'net', value: 'GND' }
    },
    body: p => `
        (module WS2812B
            ${p.at /* parametric position */}
            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
            (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

            ${p.cutout ? `
                (fp_line (start -1.75 -1.75) (end -1.75 1.75) (layer Edge.Cuts) (width 0.15))
                (fp_line (start -1.75 1.75) (end 1.75 1.75) (layer Edge.Cuts) (width 0.15))
                (fp_line (start 1.75 1.75) (end 1.75 -1.75) (layer Edge.Cuts) (width 0.15))
                (fp_line (start 1.75 -1.75) (end -1.75 -1.75) (layer Edge.Cuts) (width 0.15))
            ` : `
                (fp_line (start -1.75 -1.75) (end -1.75 1.75) (layer F.SilkS) (width 0.15))
                (fp_line (start -1.75 1.75) (end 1.75 1.75) (layer F.SilkS) (width 0.15))
                (fp_line (start 1.75 1.75) (end 1.75 -1.75) (layer F.SilkS) (width 0.15))
                (fp_line (start 1.75 -1.75) (end -1.75 -1.75) (layer F.SilkS) (width 0.15))
                (fp_line (start -1.75 -1.75) (end -1.75 1.75) (layer B.SilkS) (width 0.15))
                (fp_line (start -1.75 1.75) (end 1.75 1.75) (layer B.SilkS) (width 0.15))
                (fp_line (start 1.75 1.75) (end 1.75 -1.75) (layer B.SilkS) (width 0.15))
                (fp_line (start 1.75 -1.75) (end -1.75 -1.75) (layer B.SilkS) (width 0.15))
            `}

            (fp_poly (pts (xy 4 1.375) (xy 4 0.375) (xy 4.5 0.875)) (layer F.SilkS) (width 0.1))
            (pad 1 smd rect (at -2.2 -0.875 ${p.rot}) (size 2.6 1) (layers F.Cu F.Paste F.Mask) ${p.VCC.str})
            (pad 2 smd rect (at -2.2 0.875 ${p.rot}) (size 2.6 1) (layers F.Cu F.Paste F.Mask) ${p.dout.str})
            (pad 3 smd rect (at 2.2 0.875 ${p.rot}) (size 2.6 1) (layers F.Cu F.Paste F.Mask) ${p.GND.str})
            (pad 4 smd rect (at 2.2 -0.875 ${p.rot}) (size 2.6 1) (layers F.Cu F.Paste F.Mask) ${p.din.str})

            (fp_poly (pts (xy 4 -1.375) (xy 4 -0.375) (xy 4.5 -0.875)) (layer B.SilkS) (width 0.1))
            (pad 2 smd rect (at -2.2 -0.875 ${p.rot}) (size 2.6 1) (layers B.Cu B.Paste B.Mask) ${p.dout.str})
            (pad 1 smd rect (at -2.2 0.875 ${p.rot}) (size 2.6 1) (layers B.Cu B.Paste B.Mask) ${p.VCC.str})
            (pad 4 smd rect (at 2.2 0.875 ${p.rot}) (size 2.6 1) (layers B.Cu B.Paste B.Mask) ${p.din.str})
            (pad 3 smd rect (at 2.2 -0.875 ${p.rot}) (size 2.6 1) (layers B.Cu B.Paste B.Mask) ${p.GND.str})
        )

        (via (at ${p.xy(4.5, 0)}) (size 0.6) (drill 0.3) (layers "F.Cu" "B.Cu") (net ${p.GND.index}))
        (via (at ${p.xy(5.5, -1)}) (size 0.6) (drill 0.3) (layers "F.Cu" "B.Cu") (net ${p.din.index}))

        (via (at ${p.xy(-4.5, 0)}) (size 0.6) (drill 0.3) (layers "F.Cu" "B.Cu") (net ${p.dout.index}))
        (via (at ${p.xy(-5.5, -1)}) (size 0.6) (drill 0.3) (layers "F.Cu" "B.Cu") (net ${p.VCC.index}))

        (segment (start ${p.xy(-2.2, -0.875)}) (end ${p.xy(-5.375, -0.875)}) (width 0.25) (layer "F.Cu"))
        (segment (start ${p.xy(-5.375, -0.875)}) (end ${p.xy(-5.5, -1)}) (width 0.25) (layer "F.Cu"))
        (segment (start ${p.xy(2.2, 0.875)}) (end ${p.xy(3.625, 0.875)}) (width 0.25) (layer "F.Cu"))
        (segment (start ${p.xy(3.625, 0.875)}) (end ${p.xy(4.5, 0)}) (width 0.25) (layer "F.Cu"))
        (segment (start ${p.xy(5.375, -0.875)}) (end ${p.xy(5.5, -1)}) (width 0.25) (layer "F.Cu"))
        (segment (start ${p.xy(2.2, -0.875)}) (end ${p.xy(5.375, -0.875)}) (width 0.25) (layer "F.Cu"))
        (segment (start ${p.xy(-2.2, 0.875)}) (end ${p.xy(-3.625, 0.875)}) (width 0.25) (layer "F.Cu"))
        (segment (start ${p.xy(-3.625, 0.875)}) (end ${p.xy(-4.5, 0)}) (width 0.25) (layer "F.Cu"))
        (segment (start ${p.xy(-4.508884, 0.875)}) (end ${p.xy(-5.5, -0.116116)}) (width 0.25) (layer "B.Cu"))
        (segment (start ${p.xy(-2.2, 0.875)}) (end ${p.xy(-4.508884, 0.875)}) (width 0.25) (layer "B.Cu"))
        (segment (start ${p.xy(-5.5, -0.116116)}) (end ${p.xy(-5.5, -1)}) (width 0.25) (layer "B.Cu"))
        (segment (start ${p.xy(2.2, -0.875)}) (end ${p.xy(3.075, 0)}) (width 0.25) (layer "B.Cu"))
        (segment (start ${p.xy(3.075, 0)}) (end ${p.xy(4.5, 0)}) (width 0.25) (layer "B.Cu"))
        (segment (start ${p.xy(4.508884, 0.875)}) (end ${p.xy(5.5, -0.116116)}) (width 0.25) (layer "B.Cu"))
        (segment (start ${p.xy(2.2, 0.875)}) (end ${p.xy(4.508884, 0.875)}) (width 0.25) (layer "B.Cu"))
        (segment (start ${p.xy(5.5, -0.116116)}) (end ${p.xy(5.5, -1)}) (width 0.25) (layer "B.Cu"))
        (segment (start ${p.xy(-3.075, 0)}) (end ${p.xy(-4.5, 0)}) (width 0.25) (layer "B.Cu"))
        (segment (start ${p.xy(-2.2, -0.875)}) (end ${p.xy(-3.075, 0)}) (width 0.25) (layer "B.Cu"))
    `
}
