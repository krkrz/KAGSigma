precision mediump float;
varying vec2 v_texCoord;
uniform sampler2D s_tex0;
uniform sampler2D s_tex1;
uniform float s_opacity;
void main()
{
	vec4 s1 = texture2D( s_tex0, v_texCoord );
	vec4 s2 = texture2D( s_tex1, v_texCoord );
	float a1 = s1.a;
	float a2 = s2.a;
	float a = a1 * (1.0-s_opacity);
	float alpha = 1.0;
	if( a != 0.0 ) {
		float b = a2 * s_opacity;
		alpha = b/a;
		alpha = alpha / (1.0-b+alpha);
		alpha = clamp( alpha, 0.0, 1.0 );
	}

	float ar = a1 + (a2 - a1)*s_opacity;
	gl_FragColor.rgb = s1.rgb + (s2.rgb - s1.rgb) * alpha;
	gl_FragColor.a = ar;
}
