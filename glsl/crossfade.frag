precision mediump float;
varying vec2 v_texCoord;
uniform sampler2D s_tex0;
uniform sampler2D s_tex1;
uniform float s_opacity;
void main()
{
	vec4 s1 = texture2D( s_tex0, v_texCoord );
	vec4 s2 = texture2D( s_tex1, v_texCoord );
	gl_FragColor.rgb = s1.rgb + (s2.rgb - s1.rgb) * s_opacity;
	gl_FragColor.a = 1.0;
}
