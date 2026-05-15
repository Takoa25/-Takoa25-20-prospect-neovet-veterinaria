import { siteCopy, specialties } from '@/lib/constants';
import { LuEye } from 'react-icons/lu';
import { MdHealthAndSafety } from 'react-icons/md';

type SpecialtyIconProps = {
  id: 'oftalmologia' | 'dermatologia';
};

function SpecialtyIcon({ id }: SpecialtyIconProps) {
  const Icon = id === 'oftalmologia' ? LuEye : MdHealthAndSafety;

  return (
    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-green-light text-brand-green">
      <Icon className="h-7 w-7" aria-hidden="true" />
    </span>
  );
}

export default function Especialidades() {
  return (
    <section id="especialidades" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.22em] text-brand-green">
            {siteCopy.specialties.eyebrow}
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-brand-green-dark sm:text-5xl">
            {siteCopy.specialties.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            {siteCopy.specialties.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {specialties.map((specialty) => (
            <article
              key={specialty.title}
              className="rounded-2xl border border-brand-green/12 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:border-brand-green/35 sm:p-9"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <SpecialtyIcon id={specialty.id} />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-green">
                    {specialty.eyebrow}
                  </p>
                  <h3 className="mt-3 font-heading text-4xl font-bold text-brand-green-dark">
                    {specialty.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-700">{specialty.description}</p>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                {specialty.conditions.map((condition) => (
                  <span
                    key={condition}
                    className="rounded-full bg-brand-green-light px-4 py-2 text-sm font-bold text-brand-green-dark"
                  >
                    {condition}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
