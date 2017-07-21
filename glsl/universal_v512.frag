precision mediump float;
varying vec2 v_texCoord;
uniform sampler2D s_tex0;
uniform sampler2D s_tex1;
uniform sampler2D s_tex2;
//uniform float s_opacity;
uniform float s_vague;
uniform float s_phase;
void main()
{
	vec4 s1 = texture2D( s_tex0, v_texCoord );
	vec4 s2 = texture2D( s_tex1, v_texCoord );
	float rule = texture2D( s_tex2, v_texCoord ).a;

	float phase = s_phase - s_vague;
	float phasemax = s_phase;
	float opa;
	if( rule < phase ) {
		opa = 1.0;
	} else if( rule > phasemax ) {
		opa = 0.0;
	} else {
		opa = 1.0 - ( (rule - phase) / s_vague );
		opa = clamp( opa, 0.0, 1.0 );
	}

	gl_FragColor.rgb = s1.rgb + (s2.rgb - s1.rgb) * opa;
	gl_FragColor.a = 1.0;
}
