import Image from 'next/image';

export default function Founders() {
    return (
        <section id="founders">
            <div className="container">
                <div className="section-header">
                    <h2>Meet the Founders</h2>
                    <p className="subtitle">Visionaries Behind the Energy</p>
                </div>

                <div className="founders-grid">
                    <div className="founder-card">
                        <div className="founder-photo-container">
                            <div className="founder-photo">
                                {/* Add your founder image here */}
                                <Image
                                    src="/images/dr_komal.jpeg"
                                    alt="Dr. Komal Jeetu Parmar"
                                    width={200}
                                    height={220}
                                    className="founder-image object-cover"
                                // objectFit='cover'
                                />
                            </div>
                        </div>

                        <div className="founder-info">
                            <h3 className="founder-name-red">Dr. Komal J Parmar</h3>
                            <p className="founder-role">Vastu Consultant | Energy Healer | Mentor</p>
                            <p className="founder-education">Ph.D. in Vastu – Udaipur University</p>

                            <p>With over 18+ years of experience in Vastu consultation, research, and teaching, Dr. Komal is the guiding force behind VisualVaastu.</p>

                            <p>Her work is known for its deep intuition supported by academic strength and spiritual depth.</p>

                            <p>She integrates multiple holistic sciences including:</p>
                            <ul>
                                <li>Reiki</li>
                                <li>Tarot</li>
                                <li>Meditation</li>
                                <li>Pranic Healing</li>
                                <li>Astro-Numerology</li>
                            </ul>

                            <p>Her consultations are designed to bring energetic harmony, clarity and transformation.</p>

                            <p className="founder-quote">&quot;For me, every space has a pulse — when you tune into it, transformation begins.&quot;</p>
                        </div>
                    </div>

                    <div className="founder-card">
                        <div className="founder-photo-container">
                            <div className="founder-photo">
                                {/* Add your founder image here */}
                                <Image
                                    src="/images/dr_pooja.jpeg"
                                    alt="Pooja Palesha Rathod"
                                    width={200}
                                    height={220}
                                    className="founder-image"
                                />
                            </div>
                        </div>

                        <div className="founder-info">
                            <h3 className="founder-name-red">Pooja Palesha Rathod</h3>
                            <p className="founder-role">Managing Partner | Technical Analyst | Vastu Planner</p>

                            <p>With over 16 years of experience in design and technical vastu planning, Pooja ensures every project reflects a perfect balance between layout precision and energy intent.</p>

                            <p>She specializes in:</p>
                            <ul>
                                <li>Detailed vastu layouts</li>
                                <li>Energy blueprints</li>
                                <li>Analytical drawings and reports</li>
                            </ul>

                            <p>Also trained in Tarot Reading, Numerology, Reiki and Yoga, she believes that design becomes powerful when mind, body, and energy are aligned.</p>

                            <p className="founder-quote">&quot;Vastu isn&apos;t about changing walls — it&apos;s about changing flow.&quot;</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
