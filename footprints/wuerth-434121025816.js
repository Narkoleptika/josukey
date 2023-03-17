module.exports = {
    params: {
        designator: 'S',
        reverse: true,
        r1: { type: 'net', value: 'r1' },
        r2: { type: 'net', value: 'r2' },
    },
    body: p => `
        (footprint 434121025816 (layer F.Cu) (tedit 63B6D2D4)
            ${p.at /* parametric position */}
            (descr "<b>WS-TASV</B><BR>SMT Tact Switch 6.0x3.8 mm,2 pins")
            (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
            (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
            (fp_line (start -3.0 1.95) (end 3.0 1.95) (layer F.Fab) (width 0.1))
            (fp_line (start 3.0 1.95) (end 3.0 -1.95) (layer F.Fab) (width 0.1))
            (fp_line (start 3.0 -1.95) (end -3.0 -1.95) (layer F.Fab) (width 0.1))
            (fp_line (start -3.0 -1.95) (end -3.0 1.95) (layer F.Fab) (width 0.1))
            (fp_poly
                (pts
                (xy -4.2 -2.25)
                (xy 4.2 -2.25)
                (xy 4.2 2.25)
                (xy -4.2 2.25)
                ) (layer F.CrtYd) (width 0.1)
            )

            (pad 1 smd rect (at -3.25 0.0) (size 1.5 1.4) (layers B.Cu B.Mask B.Paste) ${p.r1.str})
            (pad 2 smd rect (at 3.25 0.0) (size 1.5 1.4) (layers B.Cu B.Mask B.Paste) ${p.r2.str})
            (fp_line (start -3.1 -1.1) (end -3.1 -2.05) (layer B.SilkS) (width 0.2))
            (fp_line (start -3.1 -2.05) (end 3.1 -2.05) (layer B.SilkS) (width 0.2))
            (fp_line (start 3.1 -2.05) (end 3.1 -1.1) (layer B.SilkS) (width 0.2))
            (fp_line (start -3.1 1.1) (end -3.1 2.05) (layer B.SilkS) (width 0.2))
            (fp_line (start -3.1 2.05) (end 3.1 2.05) (layer B.SilkS) (width 0.2))
            (fp_line (start 3.1 2.05) (end 3.1 1.1) (layer B.SilkS) (width 0.2))
            (fp_circle (center 2.6 1.2) (end 2.5 1.2) (layer B.SilkS) (width 0.2))

            (pad 1 smd rect (at 3.25 0.0) (size 1.5 1.4) (layers F.Cu F.Mask F.Paste) ${p.r1.str})
            (pad 2 smd rect (at -3.25 0.0) (size 1.5 1.4) (layers F.Cu F.Mask F.Paste) ${p.r2.str})
            (fp_line (start -3.1 -1.1) (end -3.1 -2.05) (layer F.SilkS) (width 0.2))
            (fp_line (start -3.1 -2.05) (end 3.1 -2.05) (layer F.SilkS) (width 0.2))
            (fp_line (start 3.1 -2.05) (end 3.1 -1.1) (layer F.SilkS) (width 0.2))
            (fp_line (start -3.1 1.1) (end -3.1 2.05) (layer F.SilkS) (width 0.2))
            (fp_line (start -3.1 2.05) (end 3.1 2.05) (layer F.SilkS) (width 0.2))
            (fp_line (start 3.1 2.05) (end 3.1 1.1) (layer F.SilkS) (width 0.2))
            (fp_circle (center -2.6 -1.2) (end -2.5 -1.2) (layer F.SilkS) (width 0.2))

            (pad 1 thru_hole circle (at 0 0.5) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.r1.str})
            (pad 1 thru_hole circle (at 0 -0.5) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.r2.str})
        )
        (segment (start ${p.xy(-0.5, 0)}) (end ${p.xy(0, -0.5)}) (width 0.25) (layer "F.Cu") (net ${p.r1.index}))
        (segment (start ${p.xy(-3.25, 0)}) (end ${p.xy(-0.5, 0)}) (width 0.25) (layer "F.Cu") (net ${p.r1.index}))
        (segment (start ${p.xy(3.25, 0)}) (end ${p.xy(0.5, 0)}) (width 0.25) (layer "B.Cu") (net ${p.r1.index}))
        (segment (start ${p.xy(0.5, 0)}) (end ${p.xy(0, -0.5)}) (width 0.25) (layer "B.Cu") (net ${p.r1.index}))
        (segment (start ${p.xy(3.25, 0)}) (end ${p.xy(0.5, 0)}) (width 0.25) (layer "F.Cu") (net ${p.r2.index}))
        (segment (start ${p.xy(0.5, 0)}) (end ${p.xy(0, 0.5)}) (width 0.25) (layer "F.Cu") (net ${p.r2.index}))
        (segment (start ${p.xy(-3.25, 0)}) (end ${p.xy(-0.5, 0)}) (width 0.25) (layer "B.Cu") (net ${p.r2.index}))
        (segment (start ${p.xy(-0.5, 0)}) (end ${p.xy(0, 0.5)}) (width 0.25) (layer "B.Cu") (net ${p.r2.index}))
    `
}

