export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      admissions: {
        Row: {
          applicant_name: string
          birth_cert_path: string | null
          class_applying_for: string
          created_at: string
          date_of_birth: string
          gender: string
          id: string
          parent_email: string
          parent_name: string
          parent_phone: string
          permanent_address: string | null
          photo_path: string | null
          present_address: string
          previous_school: string | null
          staff_notes: string | null
          status: Database["public"]["Enums"]["admission_status"]
          submitted_by: string | null
          transcript_path: string | null
          updated_at: string
        }
        Insert: {
          applicant_name: string
          birth_cert_path?: string | null
          class_applying_for: string
          created_at?: string
          date_of_birth: string
          gender: string
          id?: string
          parent_email: string
          parent_name: string
          parent_phone: string
          permanent_address?: string | null
          photo_path?: string | null
          present_address: string
          previous_school?: string | null
          staff_notes?: string | null
          status?: Database["public"]["Enums"]["admission_status"]
          submitted_by?: string | null
          transcript_path?: string | null
          updated_at?: string
        }
        Update: {
          applicant_name?: string
          birth_cert_path?: string | null
          class_applying_for?: string
          created_at?: string
          date_of_birth?: string
          gender?: string
          id?: string
          parent_email?: string
          parent_name?: string
          parent_phone?: string
          permanent_address?: string | null
          photo_path?: string | null
          present_address?: string
          previous_school?: string | null
          staff_notes?: string | null
          status?: Database["public"]["Enums"]["admission_status"]
          submitted_by?: string | null
          transcript_path?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      exams: {
        Row: {
          created_at: string
          id: string
          name: string
          published: boolean
          term: string | null
          year: number
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          published?: boolean
          term?: string | null
          year: number
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          published?: boolean
          term?: string | null
          year?: number
        }
        Relationships: []
      }
      notices: {
        Row: {
          audience: Database["public"]["Enums"]["notice_audience"]
          author_id: string | null
          body: string
          category: Database["public"]["Enums"]["notice_category"]
          created_at: string
          id: string
          publish_date: string
          published: boolean
          title: string
          updated_at: string
        }
        Insert: {
          audience?: Database["public"]["Enums"]["notice_audience"]
          author_id?: string | null
          body: string
          category?: Database["public"]["Enums"]["notice_category"]
          created_at?: string
          id?: string
          publish_date?: string
          published?: boolean
          title: string
          updated_at?: string
        }
        Update: {
          audience?: Database["public"]["Enums"]["notice_audience"]
          author_id?: string | null
          body?: string
          category?: Database["public"]["Enums"]["notice_category"]
          created_at?: string
          id?: string
          publish_date?: string
          published?: boolean
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      results: {
        Row: {
          class_name: string
          created_at: string
          exam_id: string
          gpa: number | null
          grade: string | null
          id: string
          marks: Json
          remarks: string | null
          roll_no: string
          student_name: string
        }
        Insert: {
          class_name: string
          created_at?: string
          exam_id: string
          gpa?: number | null
          grade?: string | null
          id?: string
          marks?: Json
          remarks?: string | null
          roll_no: string
          student_name: string
        }
        Update: {
          class_name?: string
          created_at?: string
          exam_id?: string
          gpa?: number | null
          grade?: string | null
          id?: string
          marks?: Json
          remarks?: string | null
          roll_no?: string
          student_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "results_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "exams"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      admission_status: "pending" | "under_review" | "accepted" | "rejected"
      app_role: "admin" | "teacher" | "student" | "parent"
      notice_audience: "all" | "students" | "parents" | "teachers"
      notice_category: "general" | "academic" | "event" | "urgent"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      admission_status: ["pending", "under_review", "accepted", "rejected"],
      app_role: ["admin", "teacher", "student", "parent"],
      notice_audience: ["all", "students", "parents", "teachers"],
      notice_category: ["general", "academic", "event", "urgent"],
    },
  },
} as const
