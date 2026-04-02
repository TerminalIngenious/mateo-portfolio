"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./admin.module.css";

interface Project {
  id?: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
  image_url: string;
  size: string;
  order_index: number;
  project_url?: string
}

const empty: Project = {
  title: "",
  type: "",
  description: "",
  tags: [],
  image_url: "",
  size: "half",
  order_index: 0,
};

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [form, setForm] = useState<Project>(empty);
  const [editing, setEditing] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [tagsInput, setTagsInput] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") router.push("/admin/login");
  }, [status, router]);

  useEffect(() => {
    if (status === "authenticated") fetchProjects();
  }, [status]);

  const fetchProjects = async () => {
    const res = await fetch("/api/projects");
    const data = await res.json();
    setProjects(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const payload = {
      ...form,
      tags: tagsInput
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };
    if (editing) {
      await fetch(`/api/projects/${editing}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } else {
      await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }
    setForm(empty);
    setTagsInput("");
    setEditing(null);
    setSaving(false);
    fetchProjects();
  };

  const handleEdit = (p: Project) => {
    setForm(p);
    setTagsInput(p.tags.join(", "));
    setEditing(p.id!);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer ce projet ?")) return;
    await fetch(`/api/projects/${id}`, { method: "DELETE" });
    fetchProjects();
  };

  if (status === "loading")
    return <div className={styles.loading}>Chargement...</div>;

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerLogo}>
          <span>M</span>G — Admin
        </div>
        <div className={styles.headerRight}>
          <span className={styles.headerUser}>{session?.user?.email}</span>
          <button
            className={styles.logoutBtn}
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Déconnexion
          </button>
          <a href="/" className={styles.viewSite}>
            Voir le site →
          </a>
        </div>
      </header>

      <div className={styles.inner}>
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>
            {editing ? "Modifier le projet" : "Ajouter un projet"}
          </h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.group}>
                <label className={styles.label}>Titre</label>
                <input
                  className={styles.input}
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="Nom du projet"
                  required
                />
              </div>
              <div className={styles.group}>
                <label className={styles.label}>Type</label>
                <input
                  className={styles.input}
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  placeholder="Clip musical, Corporate..."
                  required
                />
              </div>
            </div>
            <div className={styles.group}>
              <label className={styles.label}>
                Lien du projet (YouTube, Vimeo...)
              </label>
              <input
                className={styles.input}
                value={form.project_url || ""}
                onChange={(e) =>
                  setForm({ ...form, project_url: e.target.value })
                }
                placeholder="https://youtube.com/watch?v=..."
              />
            </div>
            <div className={styles.group}>
              <label className={styles.label}>Description</label>
              <textarea
                className={styles.textarea}
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                placeholder="Description du projet..."
              />
            </div>
            <div className={styles.row}>
              <div className={styles.group}>
                <label className={styles.label}>
                  Tags (séparés par des virgules)
                </label>
                <input
                  className={styles.input}
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="Montage, Color grading, Motion design"
                />
              </div>
              <div className={styles.group}>
                <label className={styles.label}>URL de l'image</label>
                <input
                  className={styles.input}
                  value={form.image_url}
                  onChange={(e) =>
                    setForm({ ...form, image_url: e.target.value })
                  }
                  placeholder="https://..."
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.group}>
                <label className={styles.label}>Taille de la carte</label>
                <select
                  className={styles.input}
                  value={form.size}
                  onChange={(e) => setForm({ ...form, size: e.target.value })}
                >
                  <option value="half">Demi (half)</option>
                  <option value="large">Grande (large)</option>
                  <option value="medium">Moyenne (medium)</option>
                  <option value="wide">Pleine largeur (wide)</option>
                </select>
              </div>
              <div className={styles.group}>
                <label className={styles.label}>Ordre d'affichage</label>
                <input
                  className={styles.input}
                  type="number"
                  value={form.order_index}
                  onChange={(e) =>
                    setForm({ ...form, order_index: Number(e.target.value) })
                  }
                  placeholder="0"
                />
              </div>
            </div>
            <div className={styles.formActions}>
              {editing && (
                <button
                  type="button"
                  className={styles.cancelBtn}
                  onClick={() => {
                    setForm(empty);
                    setEditing(null);
                    setTagsInput("");
                  }}
                >
                  Annuler
                </button>
              )}
              <button
                type="submit"
                className={styles.saveBtn}
                disabled={saving}
              >
                {saving ? (
                  <span className={styles.spinner} />
                ) : editing ? (
                  "Mettre à jour"
                ) : (
                  "Ajouter le projet"
                )}
              </button>
            </div>
          </form>
        </section>

        <section className={styles.listSection}>
          <h2 className={styles.sectionTitle}>Projets ({projects.length})</h2>
          <div className={styles.projectList}>
            {projects.length === 0 && (
              <p className={styles.empty}>Aucun projet pour l'instant.</p>
            )}
            {projects.map((p) => (
              <div key={p.id} className={styles.projectItem}>
                <div className={styles.projectInfo}>
                  <span className={styles.projectType}>{p.type}</span>
                  <strong className={styles.projectTitle}>{p.title}</strong>
                  <span className={styles.projectTags}>
                    {p.tags?.join(", ")}
                  </span>
                </div>
                <div className={styles.projectActions}>
                  <button
                    className={styles.editBtn}
                    onClick={() => handleEdit(p)}
                  >
                    Modifier
                  </button>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => handleDelete(p.id!)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
