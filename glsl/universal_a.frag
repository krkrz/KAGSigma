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

	if( rule >= s_phase ) {
		gl_FragColor = s1;
	} else if( rule < (s_phase-s_vague) ) {
		gl_FragColor = s2;
	} else {
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

		float a1 = s1.a;
		float a2 = s2.a;
		float a = a1 * (1.0-opa);
		float alpha = 1.0;
		if( a != 0.0 ) {
			float b = a2 * opa;
			alpha = b/a;
			alpha = alpha / (1.0-b+alpha);
			alpha = clamp( alpha, 0.0, 1.0 );
		}

		//float ar = a1 + (a2 - a1)*opa;
		float ar = 1.0 - (1.0 - a1) * (1.0 - a2);
		gl_FragColor.rgb = s1.rgb + (s2.rgb - s1.rgb) * alpha;
		gl_FragColor.a = ar;
	}


}
