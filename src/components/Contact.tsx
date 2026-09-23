import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Send, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "At least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "At least 5 characters"),
  message: z.string().min(10, "At least 10 characters"),
});
type FormValues = z.infer<typeof formSchema>;

function Field({
  label, id, type = "text", multiline = false, error, register,
}: {
  label: string; id: string; type?: string; multiline?: boolean;
  error?: string; register: object;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
        {label}
      </label>
      <div className={`rounded-xl transition-all duration-200 ${focused ? "ring-2 ring-primary/40" : "ring-1 ring-border"} ${error ? "ring-red-500/50" : ""}`}>
        {multiline ? (
          <textarea
            id={id}
            rows={5}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full bg-foreground/[0.04] rounded-xl px-4 py-3.5 text-foreground text-sm font-normal placeholder:text-muted-foreground/50 outline-none resize-none"
            placeholder={`Enter ${label.toLowerCase()}...`}
            {...(register as object)}
          />
        ) : (
          <input
            id={id}
            type={type}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full bg-foreground/[0.04] rounded-xl px-4 h-12 text-foreground text-sm font-normal placeholder:text-muted-foreground/50 outline-none"
            placeholder={`Enter ${label.toLowerCase()}...`}
            {...(register as object)}
          />
        )}
      </div>
      {error && <p className="text-xs text-red-400 font-semibold">{error}</p>}
    </div>
  );
}

export function Contact() {
  const { toast } = useToast();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(_v: FormValues) {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast({ title: "Message sent!", description: "I'll get back to you within 24 hours." });
      setTimeout(() => { setSubmitted(false); reset(); }, 4000);
    }, 1200);
  }

  return (
    <section id="contact" className="py-[120px] bg-background relative z-10 overflow-hidden" ref={sectionRef}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-3xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4">Contact</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-4">
            Let's Build<br />
            <span style={{ WebkitTextStroke: "2px hsl(var(--primary))", color: "transparent" }}>
              Something Great
            </span>
          </h2>
          <p className="text-muted-foreground text-base font-normal">
            Drop a message and I'll get back within 24 hours.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-[2rem] bg-card border border-border p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/6 rounded-full blur-[80px] pointer-events-none" />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex flex-col items-center justify-center gap-5 py-20 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center"
                  >
                    <CheckCircle2 className="h-8 w-8 text-green-400" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">Message Sent!</h3>
                    <p className="text-sm font-normal text-muted-foreground">I'll reply within 24 hours.</p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-5 relative z-10"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Your Name" id="name" error={errors.name?.message} register={register("name")} />
                    <Field label="Email Address" id="email" type="email" error={errors.email?.message} register={register("email")} />
                  </div>
                  <Field label="Subject" id="subject" error={errors.subject?.message} register={register("subject")} />
                  <Field label="Message" id="message" multiline error={errors.message?.message} register={register("message")} />

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: submitting ? 1 : 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    data-testid="button-submit-contact"
                    className="w-full h-14 rounded-xl bg-primary text-primary-foreground text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                  >
                    {submitting ? (
                      <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="h-4 w-4" /> Send Message</>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
